import './styles.css'
// types
import { IPokemonSummaryList } from '../../../../domain/types/pokemon'
// Components
import PokemonCard from '../../molecules/pokemon-card'
import Paginator from '../../molecules/paginator'

export default function PokemonList({
  pokemonsList,
  totalOfPages
}: {
  pokemonsList: IPokemonSummaryList[]
  totalOfPages?: number
}) {
  return (
    <div className="pokemon-list-container">
      <div className="pokemon-list">
        {pokemonsList?.map((pokemon: IPokemonSummaryList) => (
          <PokemonCard
            key={pokemon?.pokemon_v2_pokemon?.id}
            pokemon={pokemon}
          />
        ))}
      </div>
      <Paginator totalOfPages={totalOfPages} />
    </div>
  )
}
