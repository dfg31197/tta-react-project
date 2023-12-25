import styles from "./App.module.css";


function App() {
  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          LOREM IPSUM
        </div>
        <nav className={styles.headerRight}>
          <div>
            LINK1
          </div>
        </nav>
      </header>
      <main className={styles.content}>
        <section className={styles.contentLeft}>
          THIS IS SOME CONTENT ALIGNED IN THE CENTER VERTICALLY AND HORIZONTALLY
        </section>
        <section className={styles.contentRight}>

        </section>
      </main>
      <footer className={styles.footer}>
        THIS IS THE FOOTER CONTENT WHICH IS ALIGNED LEFT
      </footer>
    </article>
  );
}

export default App;
