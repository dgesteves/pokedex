import { BASE_URL } from "../../constants";
import { Pokemon } from "@/components/Pokemons/types";
import Head from "next/head";

export default function PokemonPage({
  abilities,
  moves,
  stats,
  types,
  name,
}: any) {
  return (
    <>
      <Head>
        <title>Pokemon Details</title>
        <meta
          name="description"
          content="Page with pokemon description, stats, abilities and moves."
        />
      </Head>
      <section>
        <h2>{name}</h2>
        {types.map(({ type }: { type: { name: string } }) => (
          <div key={type.name}>{`type : ${type.name}`}</div>
        ))}
        {stats.map((stat: { base_stat: number; stat: { name: string } }) => (
          <div
            key={stat.stat.name}
          >{`${stat.stat.name} : ${stat.base_stat}`}</div>
        ))}
        {abilities.map(
          ({ ability }: { ability: { name: string } }, index: number) => (
            <div key={index}>{`ability: ${ability.name}`}</div>
          )
        )}
        {moves.map(({ move }: { move: { name: string } }) => (
          <div key={move.name}>{`move : ${move.name}`}</div>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps({
  params: { name },
}: {
  params: {
    name: string;
  };
}) {
  const res = await fetch(`${BASE_URL}/${name}`);
  const { abilities, moves, stats, types } = await res.json();

  return {
    props: {
      abilities,
      moves,
      stats,
      types,
      name,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${BASE_URL}?limit=1126`);
  const { results } = await res.json();

  const names = results.map((pokemon: Pokemon) => pokemon.name);

  return {
    paths: names.map((name: string) => ({ params: { name } })),
    fallback: false,
  };
}
