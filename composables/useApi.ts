import { InjectionKey, inject, provide } from 'vue'
import axios, { AxiosInstance } from 'axios'

// import { useAuth } from '/@src/stores/modules/auth/auth.module'
import { useRouter, useRoute } from 'vue-router'

export const apiSymbol: InjectionKey<AxiosInstance> = Symbol()

export function provideApi() {
    // const runtimeConfig = useRuntimeConfig()
  // Here we set the base URL for all requests made to the api
  const api = axios.create({
    baseURL: 'http://34.16.43.99/:8000',
  })

  // We set an interceptor for each request to
  // include Bearer token to the request if user is logged in
  api.interceptors.request.use((config) => {
    // const auth = useAuth();
    const configParams = config.params
    const configHeaders = config.headers
    config.params = { ...configParams }

    /* if (auth.isLoggedIn) {
      config.headers = {
        ...configHeaders,
        Authorization: `Bearer ${auth.token}`,
      }
    } else {
      config.headers = {
        ...configHeaders,
        // 'Access-Control-Allow-Origin': `*`,
        // 'Access-Control-Allow-Credentials': `true`,
        // 'Access-Control-Allow-Headers': `Origin, X-Requested-With, Content-Type,Accept, Authortization`,
        // 'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    } */
    return config
  })

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      /* const auth = useAuth();
      const router = useRouter();
      if (error.response.status === 401 || error.response.status === 403) {
        auth.logout();
        window.location.href = '/auth/login';
      } */
      return Promise.reject(error);
    }
  );

  provide(apiSymbol, api)

  return api
}

export function useApi() {
  const api = inject(apiSymbol)
  if (!api) {
    throw new Error('Api not properly injected in app')
  }
  return api
}
