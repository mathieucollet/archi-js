import {useEffect, useState} from "react";

export function Pokemons() {
  const [pokemonData, setPokemonData] = useState(null)

  useEffect(() => {
    getData()

    async function getData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await response.json()
      setPokemonData(data.results)
    }
  }, [])

  return (
    <div>
      <h1 className="text-3xl text-center mt-8">Mes super pokémons</h1>
      { pokemonData && (
        <div className="w-full flex flex-wrap gap-8 mt-8 justify-center items-center">
          {pokemonData.map((pokemon, index) => <div key={index} className="shadow p-5 flex">
            <h3 className="font-bold text-xl capitalize">{pokemon.name}</h3>
          </div>)}
        </div>
      )}
    </div>
  )
}
