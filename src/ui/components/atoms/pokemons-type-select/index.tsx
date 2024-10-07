//hooks
import { useSelector, useDispatch } from 'react-redux'
//redux
import { setSelectTypeFilter } from '../../../../domain/select-type-filter-slice'
//types and enums
import { EPokemonsTypes } from '../../../../domain/enums/pokemons-types'
//utils
import { getPokemonTypeColor } from '../../../utils/pokemon-type-colors'
//styles
import './styles.css'

const PokemonTypeSelector = () => {
  const dispatch = useDispatch()
  const { selectTypeFilter } = useSelector(
    (state: any) => state.selectTypeFilter
  )

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectTypeFilter(event.target.value as EPokemonsTypes))
  }

  return (
    <div className="custom-select-container">
      <select
        className="custom-select"
        value={selectTypeFilter}
        onChange={handleChange}
        style={{ color: getPokemonTypeColor(selectTypeFilter) }}
      >
        {Object.values(EPokemonsTypes).map((type) => (
          <option
            key={type}
            value={type}
            style={{ color: getPokemonTypeColor(type) }}
            defaultValue={EPokemonsTypes.ALL}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default PokemonTypeSelector
