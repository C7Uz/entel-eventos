import { provideApi } from '~/composables/useApi'
const api = provideApi()
// const api = provideApi();

const home = async () => {
  try {
    const { data } = await api.get('/api/home/')

    if (!data?.data?.events) return null

    // Filtrar eventos con summary vacío
    interface Event {
      summary: string
      [key: string]: any
    }

    interface HomeData {
      events: Event[]
      [key: string]: any
    }

    interface ApiResponse {
      data: HomeData
      [key: string]: any
    }

    const filteredEvents: Event[] = (data as ApiResponse).data.events.filter((event: Event) => event.summary != "")

    // Retornar el mismo formato de datos, pero con los eventos filtrados
    return {
      ...data,
      data: {
        ...data.data,
        events: filteredEvents
      }
    }
  } catch (error) {
    return Promise.reject(error)
  }
}


export default {
  namespaced: true,
  home
}
