import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

const isServer = typeof window === 'undefined';

const mocksAdapter = async (config: InternalAxiosRequestConfig): Promise<AxiosResponse> => {
  const configDefaultAdapter = { ...config, adapter: axios.defaults.adapter };
  const axiosInstanceWithoutMocks = axios.create(configDefaultAdapter);
  // @ts-ignore
  const mocksMiddlewareUrl = `${isServer ? process.env.VITE_API_URL : import.meta.env.VITE_API_URL}/mocks`;

  if (config.method?.toUpperCase() === 'GET') {
    try {
      const response = await axiosInstanceWithoutMocks.get(mocksMiddlewareUrl, {
        params: { urlToMock: config.url },
      });

      if (response) {
        return Promise.resolve(response);
      }
    } catch (error: unknown) {
      const customError = error as CustomError;
      if (customError.response?.data?.code === 'ENOENT') {
        console.log(`Mocks: Creating following file: ${config.url}.json`);

        const response = await axiosInstanceWithoutMocks.request(configDefaultAdapter);

        console.log('responsita', response);

        await axiosInstanceWithoutMocks.post(mocksMiddlewareUrl, {
          urlToMock: config.url,
          response: { data: response.data, headers: response.headers, status: response.status },
        });
      }

      console.log('Error fetching mocked data', error);
    }

    const response: AxiosResponse = {
      data: {
        message: 'This is dummy data',
      },
      status: 200,
      statusText: 'OK',
      config,
      headers: {},
    };

    return Promise.resolve(response);
  } else {
    return axiosInstanceWithoutMocks.request(configDefaultAdapter);
  }
};

interface CustomError extends Error {
  response?: { data?: { code?: string } };
}

export default mocksAdapter;
