import './styles.css'
// Icons
import { PokeballIcon } from '../../atoms/icons/pokeball-icon'
// Components
import SearchBar from '../../atoms/search-bar'
import SortByFilter from '../sort-by-filter'

export default function HomeHeader() {
  return (
    <header className="home-header-container">
      <section className="hero-section">
        <PokeballIcon />
        <h1 className="header- title">Pokedex</h1>
      </section>
      <section className="filter-section">
        <SearchBar />
        <SortByFilter />
      </section>
    </header>
  )
}
