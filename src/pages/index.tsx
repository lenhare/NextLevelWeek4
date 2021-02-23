import { CompletedChallenges } from "../components/completedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/experienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moveit</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
