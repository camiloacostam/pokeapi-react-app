import './styles.css'
import { EFilterByOptions } from '../../../../domain/enums/filter'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { setFilterBy } from '../../../../domain/filter-by-slice'
import { setPageCounter } from '../../../../domain/page-counter-slice'
import { reset as resetPokemonsType } from '../../../../domain/select-type-filter-slice'

export default function FilterBox() {
  const dispatch = useDispatch()
  const { filterBy } = useSelector((state: any) => state.filterBy)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPageCounter(0))
    if (e.target.value === EFilterByOptions.FAVORITES) {
      dispatch(resetPokemonsType())
    }
    dispatch(setFilterBy(e.target.value as EFilterByOptions))
  }

  return (
    <div className="filter-box-container">
      <h1>Sort By</h1>
      <div className="filter-box-content">
        <label>
          <input
            type="radio"
            id="sortByNumber"
            name="sortBy"
            value={EFilterByOptions.ID}
            checked={filterBy === EFilterByOptions.ID}
            onChange={handleChange}
          />
          Number
        </label>
        <label>
          <input
            type="radio"
            id="sortByName"
            name="sortBy"
            value={EFilterByOptions.NAME}
            checked={filterBy === EFilterByOptions.NAME}
            onChange={handleChange}
          />
          Name
        </label>
        <label>
          <input
            type="radio"
            id="sortByFavorites"
            name="sortBy"
            value={EFilterByOptions.FAVORITES}
            checked={filterBy === EFilterByOptions.FAVORITES}
            onChange={handleChange}
          />
          Favorites
        </label>
      </div>
    </div>
  )
}
