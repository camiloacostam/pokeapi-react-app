import './styles.css'
//utils
import { getPokemonTypeColor } from '../../../utils/pokemon-type-colors'

interface ITypeTagProps {
  type: string
}

export default function TypeTag({ type }: ITypeTagProps) {
  const bgColor = getPokemonTypeColor(type)
  return (
    <span style={{ background: bgColor }} className={`tag-container`}>
      {type}
    </span>
  )
}
