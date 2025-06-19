import { provide } from 'vue';
import axios from 'axios';

const apiSymbol = Symbol();
function provideApi() {
  const api = axios.create({
    baseURL: "https://api.larutaentelempresas.pe"
  });
  api.interceptors.request.use((config) => {
    const configParams = config.params;
    config.headers;
    config.params = { ...configParams };
    return config;
  });
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );
  provide(apiSymbol, api);
  return api;
}

export { provideApi as p };
//# sourceMappingURL=useApi-aa853999.mjs.map
