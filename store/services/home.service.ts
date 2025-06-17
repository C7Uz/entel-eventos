import { provideApi } from '~/composables/useApi'
const api = provideApi()
// const api = provideApi();

const home = async () => {
  try {
    const { data } = await api.get('/api/home/')
    return data || null
  } catch (error) {
    return Promise.reject(error)
  }
}

export default {
  namespaced: true,
  home
}
