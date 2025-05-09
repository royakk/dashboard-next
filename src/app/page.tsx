"use client";
import { useEffect, useState } from "react";
import { getPokemon } from "./pokemon";
import Image from "next/image";

export default function Home() {
  const [pokemons, setPokemons] = useState<{ name: string }[]>([]);
  console.log(pokemons)
  useEffect(() => {
    async function getData() {
      const data = await getPokemon();
      setPokemons(data?.results);
    }

    getData();
  }, []);
  getPokemon();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {pokemons?.map((item)=>(
          <div key={item?.name}>
            <h2>{item?.name}</h2>
           <Image width={300} height={300} src={`https://img.pokemondb.net/artwork/large/${item?.name}.jpg`} alt={item?.name}/>
           </div>
        ))}
       
      </main>
    </div>
  );
}
