import './styles.css'
import { SearchIcon } from '../icons/search-icon'
import { XIcon } from '../icons/x-icon'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchFilter } from '../../../../domain/search-filter-slice'

export default function SearchBar() {
  const { searchFilter } = useSelector((state) => state.searchFilter)
  const dispatch = useDispatch()

  const handleInput = (e) => {
    dispatch(setSearchFilter(e.target.value))
  }

  const handleClear = () => {
    dispatch(setSearchFilter(''))
  }

  return (
    <div className="container">
      <div className="input-wrap">
        <SearchIcon />
        <input
          id="search-input"
          onChange={handleInput}
          value={searchFilter}
          type="text"
          name="product-search"
          placeholder="Search Pokemon"
        />
        <button className="clear-button" onClick={handleClear}>
          <XIcon />
        </button>
      </div>
    </div>
  )
}
