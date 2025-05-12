import Head from 'next/head'
import Image from 'next/image'
import HomeCss from '../styles/Home.module.css'
import Link from 'next/link'
import { Spacer } from '@nextui-org/react'

export default function Home({ pokemonListo }) {
  console.log("pokemonListo", pokemonListo)
  return (
    /*estructura de la pagina*/
    /*línea del link universal "href"*/
    <>

      <head>
        <title>Pokedex | AF</title>
      </head>

      <div style={{
        color: '#fff',
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: '#e95c4d'
      }}>
        <img
        src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
        alt="icono de la App"
        width={300}
        height={120}
        />
        
        <Spacer css={{flex: 1}}/>
        
        <a href="/login" className={HomeCss.loginButton}>
          
        <span>Iniciar Sesión</span>
</a>

      </div>
       
      <ul className={HomeCss.columnas}>
      {pokemonListo.map((pokemon, index) => {
        return(
          <li>
            <Link href={{
              pathname: '/pokemon/[name]',
              query: {name: pokemon.name}
              }}>
           <a>
              <div className={`${HomeCss.card} ${pokemon.types[0].type.name}`}>
                <div className={HomeCss.nombreTipos}>
                  <h3>{pokemon.name}</h3>
                  <div className={HomeCss.tipos}>
                    {pokemon.types.map((tipo, index) => {
                      return (
                        <p className={HomeCss.tipo}>{tipo.type.name}</p>
                      )
                    })}
                  </div>
                </div>
                <img src={pokemon.image} 
                height="100" 
                width={100} 
                className={HomeCss.imagen} />
              </div>
            </a>
            </Link>
          </li>
        )
      })}
      </ul>

    </>
  )
}

/*consumir la API de PokeApi con la funcion de fetch y .json*/
export async function getServerSideProps() {

const traerPokemon = (numero) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${numero}?limit=101&offset=0`)
    .then(response => response.json())
    .then (data => data)
}

let arrayPokemon = []

for (let index = 1; index <= 101; index++) {
  let data = await traerPokemon(index)
  arrayPokemon.push(data)
}

/*poner en la page los datos de la API (pokemones)*/
let pokemonListo = arrayPokemon.map(pokemon => {
  return({
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other.dream_world.front_default,
    types: pokemon.types
  })

})

  return {
    props: {
      pokemonListo
    }
  }
}