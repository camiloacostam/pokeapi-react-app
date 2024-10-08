import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import PokemonCard from '.'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../../../store/store'

describe('PokemonCard', () => {
  it('should render correctly', () => {
    render(
      <Router>
        <Provider store={store}>
          <PokemonCard
            pokemon={{
              id: 1,
              name: 'bulbasaur',
              pokemon_v2_pokemonsprites: [{ sprites: 'test_image' }]
            }}
          />
        </Provider>
      </Router>
    )
    expect(screen.getByText('bulbasaur')).toBeDefined()
    expect(screen.getByText('# 1')).toBeDefined()
    expect(
      screen.getByAltText<HTMLImageElement>('Pokemon bulbasaur').src
    ).toContain('test_image')
  })
  it('should render a favorite button', () => {
    render(
      <Router>
        <Provider store={store}>
          <PokemonCard
            pokemon={{
              id: 1,
              name: 'bulbasaur',
              pokemon_v2_pokemonsprites: [{ sprites: 'test image' }]
            }}
          />
        </Provider>
      </Router>
    )
    expect(screen.getByTestId('favorite-button')).toBeDefined()
  })
})
