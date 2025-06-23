import { ref } from "vue";
import { d as defineStore } from "../server.mjs";
import { p as provideApi } from "./useApi-f645acd5.js";
const api = provideApi();
const findOne = async (slug) => {
  try {
    const { data } = await api.get(`/api/event/${slug}/`);
    return data || null;
  } catch (error) {
    return Promise.reject(error);
  }
};
const storeInscription = async (values) => {
  try {
    const { data } = await api.post(`/api/inscription/`, values);
    return data || null;
  } catch (error) {
    return Promise.reject(error);
  }
};
const findThanks = async () => {
  try {
    const { data } = await api.get(`/api/page/`);
    return data || null;
  } catch (error) {
    return Promise.reject(error);
  }
};
const eventService = {
  namespaced: true,
  findOne,
  storeInscription,
  findThanks
};
const useEvent = defineStore("event", {
  state: () => ({
    event: ref(Object.assign({}, null))
  }),
  actions: {
    setEvent(value) {
      this.event = value;
    },
    async findOne(slug) {
      try {
        this.setEvent(null);
        const response = await eventService.findOne(slug);
        this.setEvent(response);
        return { ok: true, response };
      } catch (error) {
        return { ok: false, error: (error == null ? void 0 : error.response) || "Error" };
      }
    },
    async storeInscription(data) {
      try {
        const response = await eventService.storeInscription(data);
        return { ok: true, response };
      } catch (error) {
        return { ok: false, error: (error == null ? void 0 : error.response) || "Error" };
      }
    },
    async findThanks() {
      try {
        const response = await eventService.findThanks();
        return { ok: true, response };
      } catch (error) {
        return { ok: false, error: (error == null ? void 0 : error.response) || "Error" };
      }
    }
  },
  getters: {}
});
export {
  useEvent as u
};
//# sourceMappingURL=event.module-2dec8464.js.map
