import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounter } from '~/features/counter/model/useCounter'

describe('useCounter', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('starts at zero', () => {
    const counter = useCounter()
    expect(counter.count).toBe(0)
  })

  it('increments', () => {
    const counter = useCounter()
    counter.increment()
    expect(counter.count).toBe(1)
  })

  it('decrements', () => {
    const counter = useCounter()
    counter.decrement()
    expect(counter.count).toBe(-1)
  })

  it('resets to zero', () => {
    const counter = useCounter()
    counter.increment()
    counter.increment()
    counter.reset()
    expect(counter.count).toBe(0)
  })

  it('computes doubleCount', () => {
    const counter = useCounter()
    counter.increment()
    counter.increment()
    counter.increment()
    expect(counter.doubleCount).toBe(6)
  })
})
