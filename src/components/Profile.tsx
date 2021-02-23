import styles from "../styles/components/Profile.module.css";
export function Profile(params: any) {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lenhare.png" alt="Lenhare" />
      <div>
        <strong>Renan Lenhare</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
