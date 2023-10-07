import express from 'express';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const mocksRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = path.resolve(__dirname, '../../../');

mocksRouter.get('/', async (req, res) => {
  const presetUrl = req.query.urlToMock as string;
  const url = new URL(presetUrl);
  const urlToMock = url.pathname;
  const filePathFragments = urlToMock.split('/').filter(Boolean);

  const fileName = `${filePathFragments.pop()}.json`;
  const directoryPath = path.join(projectRoot, 'mocks', ...filePathFragments);

  const fullFilePath = path.join(directoryPath, fileName);

  try {
    await fs.promises.access(fullFilePath, fs.constants.F_OK);
    const response = await fs.promises.readFile(fullFilePath, 'utf8');
    return res.send(JSON.parse(response).data);
  } catch (err) {
    const nodeErr = err as NodeJSError;
    if (nodeErr.code === 'ENOENT') {
      console.log(`File not found: ${urlToMock}.json`);
      return res.status(404).send({ message: "Mock file doesn't exist", urlToMock, code: 'ENOENT' });
    } else {
      return res.status(500).send('Internal Server Error');
    }
  }
});

mocksRouter.post('/', async (req, res) => {
  const presetUrl = req.body.urlToMock as string;
  const url = new URL(presetUrl);
  const urlToMock = url.pathname;
  const responseContent = req.body.response;
  const filePathFragments = urlToMock.split('/').filter(Boolean);

  const fileName = `${filePathFragments.pop()}.json`;
  const directoryPath = path.join(projectRoot, 'mocks', ...filePathFragments);

  try {
    await fs.promises.mkdir(directoryPath, { recursive: true });
    const fullFilePath = path.join(directoryPath, fileName);

    await fs.promises.writeFile(fullFilePath, JSON.stringify(responseContent, null, 2), 'utf8');

    res.status(200).send('Mock file successfully created');
  } catch (err) {
    console.error('An error occurred:', err);
    res.status(500).send('Internal Server Error');
  }
});

interface NodeJSError extends Error {
  code?: string;
}

export default mocksRouter;
