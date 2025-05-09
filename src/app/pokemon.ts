
const URL="https://pokeapi.co/api/v2/pokemon"

export const getPokemon = async()=>{
    const res= await fetch(URL)
    return await res.json()
}