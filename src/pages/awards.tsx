import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { Menu } from "../components/Menu";

export default function Awards(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moveit</title>
      </Head>
      <Menu />
      <div>Página de conquistas</div>
    </div>
  );
}
