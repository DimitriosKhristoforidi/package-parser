import Axios from 'axios';
import { IApi } from './APITypes';

const httpRequest = Axios.create({
  baseURL: 'https://registry.npmjs.org/',
});

const api: IApi = {
  getPackage: async (name) => {
    const { data } = await httpRequest.get('' + name);

    return data;
  },
};

export default api;
