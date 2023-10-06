import BaseLayout from "./components/BaseLayout";
import styles from "./page.module.css";

export default function Home() {
  return (
    <BaseLayout>
      <main className={styles.main}>
        <h1>this is home</h1>
      </main>
    </BaseLayout>
  );
}
