import { defineStore } from 'pinia'

export const useSetting = defineStore('setting', {
    state: () => ({
        settings: {
            theme: 'theme-color',
            colorLogo: 'white',
            showFooter: false,
            eventId: null,
            showHeader: false
        },
    }),
    actions: {
        setTheme(value: string) {
            this.settings.theme = value;
        },
        setColorLogo(value: string) {
            this.settings.colorLogo = value;
        },
        setShowFooter(value: boolean) {
            this.settings.showFooter = value;
        },
        setShowHeader(value: boolean) {
            this.settings.showHeader = value;
        },
        setEventId(value: any) {
            this.settings.eventId = value;
        },
    },
    getters: {
        getSettings: state => state.settings,
    },
})
