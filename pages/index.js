import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect';
import GraphemeSplitter from "grapheme-splitter";

import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const stringSplitter = string => {
  const splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(string);
};

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`<dots place>`}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Place!
        </h1>
        <h2 className={styles.typewriter}>
          <Typewriter
            
            options={{
              autoStart: true,
              loop: true,
              stringSplitter
            }}
            onInit={(typewriter) => {
              typewriter.typeString('My Name is Chris. 😸')
              .pauseFor(2000)
              .deleteAll()
              typewriter.typeString("I'm a Software Developer. 💻")
              .pauseFor(2000)
              .deleteAll()
              .start();
            }}
          />
        </h2>
        <div className={styles.refContainer}>
          <a href="https://github.com/devofthings" target="_blank">
            <FontAwesomeIcon icon={faGithub} className={styles.ref} />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home;
