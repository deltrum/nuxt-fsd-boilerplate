/**
 * Shared API client — thin wrapper around Nuxt's $fetch / useFetch.
 * Centralises base URL, default headers, and error handling.
 */

interface ApiOptions extends RequestInit {
  params?: Record<string, string>
}

export function useApi() {
  const config = useRuntimeConfig()

  async function request<T>(url: string, opts: ApiOptions = {}): Promise<T> {
    return $fetch<T>(url, {
      baseURL: config.public.apiBase as string,
      ...opts
    })
  }

  return { request }
}
