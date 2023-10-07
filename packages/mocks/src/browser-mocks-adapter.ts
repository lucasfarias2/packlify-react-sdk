import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

const mocksAdapter =
  (mocksConfig: { allowedUrls: string[] }) =>
  async (config: InternalAxiosRequestConfig): Promise<AxiosResponse> => {
    const configDefaultAdapter = { ...config, adapter: axios.defaults.adapter };
    const axiosInstanceWithoutMocks = axios.create(configDefaultAdapter);
    // @ts-ignore
    const mocksMiddlewareUrl = `${import.meta.env.VITE_MOCKS_URL}`;

    if (config.method?.toUpperCase() === 'GET' && mocksConfig.allowedUrls.includes(`${config.url}`)) {
      try {
        const response = await axiosInstanceWithoutMocks.get(mocksMiddlewareUrl, {
          params: { urlToMock: `${config.baseURL}${config.url}` },
        });

        if (response) {
          return Promise.resolve(response);
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          if (error.response?.data?.code === 'ENOENT') {
            console.log(`Packlify mocks: Creating following file: ${config.url}.json`);

            const response = await axiosInstanceWithoutMocks.request(configDefaultAdapter);

            await axiosInstanceWithoutMocks.post(mocksMiddlewareUrl, {
              urlToMock: `${config.baseURL}${config.url}`,
              response: { data: response.data, headers: response.headers, status: response.status },
            });

            return Promise.resolve(response);
          }
        }

        console.log('Packlify mocks: Error fetching mocked data', error);
      }
    }

    return axiosInstanceWithoutMocks.request(configDefaultAdapter);
  };

export default mocksAdapter;
