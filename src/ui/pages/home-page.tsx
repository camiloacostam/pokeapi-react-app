import { usePokemon } from '../../hooks/use-pokemon'

export default function HomePage() {
  const { pokemonsData } = usePokemon()

  console.log(pokemonsData)

  return (
    <div>
      <h1>Hola PokeAPI</h1>
    </div>
  )
}
