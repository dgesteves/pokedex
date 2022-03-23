import Pokemons from "@/components/Pokemons";
import { BASE_URL } from "../constants";
import { Props, Pokemon } from "@/components/Pokemons/types";
import Head from "next/head";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";

export default function PokemonsPage({ chunks }: Props) {
  const [qTerm, setQTerm] = useState("");

  const router = useRouter();

  const onSubmit = useCallback(
    (evt: any) => {
      evt.preventDefault();

      for (const chunk of chunks) {
        const pokemon = chunk.find((name) => name === qTerm);
        if (pokemon) {
          router.push(`/${pokemon}`);
          break;
        }
      }
    },
    [chunks, router, qTerm]
  );

  const onChange = useCallback((evt: any) => {
    setQTerm(evt.target.value);
  }, []);

  return (
    <>
      <Head>
        <title>Pokemon List</title>
        <meta
          name="description"
          content="Page with a list of all pokemons with pagination and search of specific Pokemon."
        />
      </Head>
      <form onSubmit={onSubmit}>
        <label htmlFor="pokemon-search">Search a pokemon : </label>
        <input
          type="search"
          id="pokemon-search"
          name="q"
          value={qTerm}
          onChange={onChange}
        />
      </form>
      <Pokemons chunks={chunks} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${BASE_URL}?limit=1126`);
  const { results } = await res.json();

  const names = results.map((pokemon: Pokemon) => pokemon.name).sort();
  let chunks = [];

  for (let i = 0; i < names.length; i += 15) {
    chunks.push(names.slice(i, i + 15));
  }

  return {
    props: {
      chunks,
    },
  };
}
