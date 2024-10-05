import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemons } from '../../../domain/pokemon-slice'
import { RootState } from '../../../store/store'

export default function PokemonList() {
  const dispatch = useDispatch()
  const { pokemonList, loading, error } = useSelector(
    (state: RootState) => state.pokemonList
  )

  useEffect(() => {
    fetchPokemons()
  }, [dispatch])

  return (
    <ul>
      {pokemonList.map((pokemon) => (
        <li key={pokemon.id}>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </li>
      ))}
    </ul>
  )
}
