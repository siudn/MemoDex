import { render, screen } from '@testing-library/react'
import { HttpResponse, http } from 'msw'
import { expect, test } from 'vitest'
import mockServer from '../setup-tests/mockServer'
import Card from '../src/components/Card'
import voltorb from './example-db/voltorb.json'

test("Should display Pokemon's name and image", async () => {
  const EXAMPLE_POKE_ID = 100

  mockServer.use(
    http.get(`https://pokeapi.co/api/v2/pokemon/${EXAMPLE_POKE_ID}`, () => {
      return HttpResponse.json(voltorb)
    })
  )
  render(<Card id={EXAMPLE_POKE_ID} handleClick={() => {}} />)

  expect(await screen.findByText('voltorb')).toBeInTheDocument()
})
