import Axios from 'axios';

const httpRequest = Axios.create({
  baseURL: 'https://api.npms.io/v2/search',
});

const api = {
  getPackage: async (name) => {
    const { data } = await httpRequest.get('', {
      params: {
        q: name,
      },
    });
    return data;
  },
};

export default api;
