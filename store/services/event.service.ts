import { provideApi } from '~/composables/useApi'
const api = provideApi()

const findOne = async (slug: any) => {
  try {
    const { data } = await api.get(`/api/event/${slug}/`)
    return data || null
  } catch (error) {
    return Promise.reject(error)
  }
}

const storeInscription = async (values: any) => {
  try {
    const { data } = await api.post(`/api/inscription/`, values)
    return data || null
  } catch (error) {
    return Promise.reject(error)
  }
}

const findThanks = async () => {
  try {
    const { data } = await api.get(`/api/page/`)
    return data || null
  } catch (error) {
    return Promise.reject(error)
  }
}

export default {
  namespaced: true,
  findOne,
  storeInscription,
  findThanks
}
