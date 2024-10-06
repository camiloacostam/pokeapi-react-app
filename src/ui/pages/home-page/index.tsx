import { usePokemonList } from '../../../hooks/use-pokemons-list'
//styles
import './styles.css'
// Components
import Spinner from '../../components/atoms/spinner'
import PokemonList from '../../components/organisms/pokemon-list'
import HomeHeader from '../../components/organisms/home-header'

export default function HomePage() {
  const { pokemonsData, loading } = usePokemonList()

  return (
    <main className="home-page-container">
      <HomeHeader />
      {loading ? (
        <Spinner />
      ) : (
        <PokemonList pokemonsList={pokemonsData?.pokemon_v2_pokemonsprites} />
      )}
    </main>
  )
}
