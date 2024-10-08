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
  pokemonsList: any
  totalOfPages?: number
}) {
  return (
    <div className="pokemon-list-container">
      <div className="pokemon-list">
        {pokemonsList?.map((pokemon: IPokemonSummaryList) => (
          <PokemonCard key={pokemon?.id} pokemon={pokemon} />
        ))}
      </div>
      <Paginator totalOfPages={totalOfPages} />
    </div>
  )
}
