import { defineStore } from 'pinia'
import homeService from '~/store/services/home.service'

export const useHome = defineStore('home', {
    state: () => ({
        header: null,
        events: []
    }),
    actions: {
        setHeader(value: any) {
            this.header = value;
        },
        setEvents(value: any) {
            this.events = value;
        },
        async find() {
            try {
                this.setHeader(null);
                this.setEvents([]);
                const response = await homeService.home()
                this.setHeader((response.data && response.data.header)?response.data.header:null);
                this.setEvents((response.data && response.data.events)?response.data.events:[]);
                return { ok: true, response: response }
            } catch (error: any) {
                return { ok: false, error: error?.response || 'Error' }
            }
        },
    },
    getters: {
    },
})
