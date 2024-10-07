import './styles.css'
// hooks
import { useDispatch, useSelector } from 'react-redux'
//redux
import {
  addFavoritePokemon,
  removeFavoritePokemon
} from '../../../../domain/favorite-pokemons-slice'
//componentes
import { StartIcon } from '../../atoms/icons/start-icon'
import { StartFilledIcon } from '../../atoms/icons/star-filled-icon'

interface IFavoriteButtonProps {
  pokemonId: number
  color?: string
}

export default function FavoriteButton({
  pokemonId,
  color = '#DC0A2D'
}: IFavoriteButtonProps) {
  const dispatch = useDispatch()
  const { favoritePokemonsId } = useSelector((state) => state.favoritePokemons)
  const isFavorite = favoritePokemonsId.some(
    (pokemon: number) => pokemon === pokemonId
  )

  return (
    <>
      {isFavorite ? (
        <button onClick={() => dispatch(removeFavoritePokemon(pokemonId))}>
          <StartFilledIcon color={color} />
        </button>
      ) : (
        <button onClick={() => dispatch(addFavoritePokemon(pokemonId))}>
          <StartIcon color={color} />
        </button>
      )}
    </>
  )
}
