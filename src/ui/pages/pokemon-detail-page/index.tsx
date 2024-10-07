import { useState, useEffect } from 'react'
// router
import { useParams, useNavigate } from 'react-router-dom'
// styles
import './styles.css'
//hooks
import { usePokemonDetail } from '../../../hooks/use-pokemon'
//utils
import { getPokemonTypeColor } from '../../utils/pokemon-type-colors'
//components
import Spinner from '../../components/atoms/spinner'
import PokemonHeader from '../../components/molecules/pokemon-header'
import PokemonDetailCard from '../../components/organisms/pokemon-detail-card'
import { ChevronLeftIcon } from '../../components/atoms/icons/chevron-left-icon'
import { ChevronRightIcon } from '../../components/atoms/icons/chevron-right-icon'

export default function PokemonDetailPage() {
  const [bgColor, setBgColor] = useState('#fffff')
  const { id } = useParams()
  const { loading, pokemonData } = usePokemonDetail(id)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) {
      setBgColor('#ffff')
    }

    if (!loading && pokemonData) {
      setBgColor(
        getPokemonTypeColor(
          pokemonData?.pokemon_v2_pokemontypes[0]?.pokemon_v2_type?.name
        )
      )
    }
  }, [id, loading, pokemonData])

  return (
    <>
      {loading ? (
        <div style={{ backgroundColor: `#ffff` }}>
          <Spinner />
        </div>
      ) : (
        <article
          className="pokemon-detail-page"
          style={{ backgroundColor: bgColor }}
        >
          <section className="pokemon-detail-container">
            <PokemonHeader
              pokemonId={pokemonData?.id}
              pokemonName={pokemonData?.name}
              img={pokemonData?.pokemon_v2_pokemonsprites[0]?.sprites}
            />
          </section>
          <section className="pokemon-detail-info">
            <span className="image-container">
              {pokemonData?.id > 1 && (
                <button
                  onClick={() => navigate(`/pokemon/${pokemonData?.id - 1}`)}
                >
                  <ChevronLeftIcon />
                </button>
              )}

              <img
                src={pokemonData?.pokemon_v2_pokemonsprites[0]?.sprites}
                alt={`Pokemon image ${pokemonData?.name}`}
              />
              <button
                onClick={() => navigate(`/pokemon/${pokemonData?.id + 1}`)}
              >
                <ChevronRightIcon />
              </button>
            </span>
            <PokemonDetailCard
              types={pokemonData?.pokemon_v2_pokemontypes}
              weight={pokemonData?.weight}
              height={pokemonData?.height}
              moves={pokemonData?.pokemon_v2_pokemonabilities}
              description={
                pokemonData?.pokemon_v2_pokemonspecy
                  ?.pokemon_v2_pokemonspeciesflavortexts[0]?.flavor_text
              }
              stats={pokemonData?.pokemon_v2_pokemonstats}
              color={bgColor}
            />
          </section>
        </article>
      )}
    </>
  )
}
