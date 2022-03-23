import Link from "next/link";
import { Props } from "@/components/Layout/types";
import styles from "./layout.module.css";

export default function Layout({ children }: Props) {
  return (
    <>
      <nav
        className={styles.nav}
        tabIndex={0}
        aria-label="link to get back to page list"
      >
        <Link href="/">PoKéDeX</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
