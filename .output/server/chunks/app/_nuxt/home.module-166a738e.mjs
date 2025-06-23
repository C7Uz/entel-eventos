import { d as defineStore } from '../server.mjs';
import { p as provideApi } from './useApi-f645acd5.mjs';

const api = provideApi();
const home = async () => {
  var _a;
  try {
    const { data } = await api.get("/api/home/");
    if (!((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.events))
      return null;
    const filteredEvents = data.data.events.filter((event) => event.summary != "");
    return {
      ...data,
      data: {
        ...data.data,
        events: filteredEvents
      }
    };
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
//# sourceMappingURL=home.module-166a738e.mjs.map
