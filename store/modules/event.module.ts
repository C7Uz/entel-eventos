import { defineStore } from 'pinia'
import eventService from '~/store/services/event.service'

export const useEvent = defineStore('event', {
    state: () => ({
        event: ref<any>(Object.assign({}, null)),

    }),
    actions: {
        setEvent(value: any) {
            this.event = value;
        },
        async findOne(slug: any) {
            try {
                this.setEvent(null);
                const response = await eventService.findOne(slug)
                this.setEvent(response);
                //console.log('Event found:', response);
                return { ok: true, response: response }
            } catch (error: any) {
                
                //console.log('Event found:', error?.response);
                return { ok: false, error: error?.response || 'Error' }
            }
        },
        async storeInscription(data: any) {
            try {
                const response = await eventService.storeInscription(data)
                return { ok: true, response: response }
            } catch (error: any) {
                return { ok: false, error: error?.response || 'Error' }
            }
        },
        async findThanks() {
            try {
                const response = await eventService.findThanks()
                return { ok: true, response: response }
            } catch (error: any) {
                return { ok: false, error: error?.response || 'Error' }
            }
        }
    },
    getters: {
    },
})
