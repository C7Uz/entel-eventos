import { useSetting } from '~/store/modules/setting.module'

export default defineNuxtRouteMiddleware((to, from) => {
    const settingModule = useSetting()

    if(to.name != 'event-id'){
        settingModule.setEventId(null);
    }
})