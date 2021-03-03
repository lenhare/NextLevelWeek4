import { useRouter } from "next/router";
import styles from "../styles/components/Menu.module.css";

export function Menu() {
  const router = useRouter();
  return (
    <div className={styles.menu}>
      <img src="Logo.png" alt="Menu" />
      <div className={styles.menu_container}>
        <button className={styles.home_button} onClick={() => router.push("/")}>
          <img src="icons/home.png" alt="home" />
        </button>
        <button
          className={styles.award_button}
          onClick={() => router.push("/awards")}
        >
          <img src="icons/award.png" alt="award" />
        </button>
      </div>
    </div>
  );
}
