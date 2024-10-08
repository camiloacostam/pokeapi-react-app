import { usePokemonList } from '../../../hooks/use-pokemons-list'
//styles
import './styles.css'
// Components
import Spinner from '../../components/atoms/spinner'
import PokemonList from '../../components/organisms/pokemon-list'
import HomeHeader from '../../components/organisms/home-header'
import { calculateTotalOfPage } from '../../utils/calculate-total-of-page'

export default function HomePage() {
  const { pokemonsData, loading } = usePokemonList()

  return (
    <main className="home-page-container">
      <HomeHeader />
      <div className="list-container">
        {loading ? (
          <Spinner />
        ) : (
          <PokemonList
            pokemonsList={pokemonsData?.pokemon_v2_pokemon}
            totalOfPages={calculateTotalOfPage(
              pokemonsData?.pokemon_v2_pokemon_aggregate.aggregate.count,
              50
            )}
          />
        )}
      </div>
    </main>
  )
}
