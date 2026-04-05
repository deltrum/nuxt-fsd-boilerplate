/** Generic API response wrapper */
export interface ApiResponse<T> {
  data: T
  meta?: {
    page: number
    total: number
  }
}

/** Utility: make selected keys optional */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
