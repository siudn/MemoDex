import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Scoreboard from '../src/components/Scoreboard'

test('Should render the Scoreboard component', () => {
  render(<Scoreboard score={0} bestScore={0} />)

  expect(screen.getByText('Current Score: 0')).toBeInTheDocument()
  expect(screen.getByText('High Score: 0')).toBeInTheDocument()
})
