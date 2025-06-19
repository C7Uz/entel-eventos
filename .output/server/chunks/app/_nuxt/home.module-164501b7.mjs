import { d as defineStore } from '../server.mjs';
import { p as provideApi } from './useApi-1052a4e0.mjs';

const api = provideApi();
const home = async () => {
  try {
    const { data } = await api.get("/api/home/");
    return data || null;
  } catch (error) {
    return Promise.reject(error);
  }
};
const homeService = {
  namespaced: true,
  home
};
const useHome = defineStore("home", {
  state: () => ({
    header: null,
    events: []
  }),
  actions: {
    setHeader(value) {
      this.header = value;
    },
    setEvents(value) {
      this.events = value;
    },
    async find() {
      try {
        this.setHeader(null);
        this.setEvents([]);
        const response = await homeService.home();
        this.setHeader(response.data && response.data.header ? response.data.header : null);
        this.setEvents(response.data && response.data.events ? response.data.events : []);
        return { ok: true, response };
      } catch (error) {
        return { ok: false, error: (error == null ? void 0 : error.response) || "Error" };
      }
    }
  },
  getters: {}
});

export { useHome as u };
//# sourceMappingURL=home.module-164501b7.mjs.map
