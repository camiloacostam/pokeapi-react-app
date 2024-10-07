import { useState } from 'react'
import './styles.css'
import { SearchIcon } from '../icons/search-icon'
import { XIcon } from '../icons/x-icon'
import { useDispatch } from 'react-redux'
import { setSearchFilter } from '../../../../domain/search-filter-slice'

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  const handleInput = (e: any) => {
    const value = e.target.value
    setSearch(value)
    setError('')

    if (/[^a-zA-Z0-9 ]/g.test(value)) {
      dispatch(setSearchFilter(''))
      setError('No special characters are allowed.')
    } else if (value.length < 3) {
      dispatch(setSearchFilter(''))
      setError('The input must have at least 3 characters.')
    } else {
      dispatch(setSearchFilter(value))
      setError('')
    }
  }

  const handleClear = () => {
    setSearch('')
    setError('')
    dispatch(setSearchFilter(''))
  }

  return (
    <div className="container">
      <div className="input-wrap">
        <SearchIcon />
        <input
          id="search-input"
          onChange={handleInput}
          value={search}
          type="text"
          name="product-search"
          placeholder="Search Pokemon"
        />
        <button className="clear-button" onClick={handleClear}>
          <XIcon />
        </button>
      </div>
      <div className="error-message">{error && <p>{error}</p>}</div>
    </div>
  )
}
