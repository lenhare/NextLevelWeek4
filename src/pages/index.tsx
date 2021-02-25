import { CompletedChallenges } from "../components/completedChallenges";
import { Countdown } from "../components/Countdown";
import Head from "next/head";
import { ExperienceBar } from "../components/experienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdowContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moveit</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
