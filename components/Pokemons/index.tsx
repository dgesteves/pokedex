import { Props } from "@/components/Pokemons/types";
import Link from "next/link";
import Image from "next/image";
import pokeBall from "public/poke-ball.svg";
import styles from "./pokemons.module.css";
import { useMemo, useState } from "react";

export default function Pokemons({ chunks }: Props) {
  const nameChunks = useMemo(() => chunks, [chunks]);
  const [page, setPage] = useState(0);

  return (
    <>
      <ul className={styles.list}>
        {chunks[page].map((name) => (
          <li
            key={name}
            className={styles.pokemon}
            tabIndex={0}
            aria-label={`Pokemons: ${name} click the link to see complete description.`}
          >
            <Image src={pokeBall} alt="poke-ball" width={20} height={20} />
            <Link href={`/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <nav className={styles.nav}>
        {nameChunks.map((page, index) => (
          <button key={index} onClick={() => setPage(index)}>
            {index + 1}
          </button>
        ))}
      </nav>
    </>
  );
}
