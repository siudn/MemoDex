import * as matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
import { afterAll, afterEach, beforeAll, expect } from 'vitest'
import mockServer from './mockServer'

expect.extend(matchers)

afterEach(() => {
  cleanup()
  mockServer.resetHandlers()
})

beforeAll(() => {
  mockServer.listen({ onUnhandledRequest: 'error' })
})

afterAll(() => {
  mockServer.close()
})
