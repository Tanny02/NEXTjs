"use client";

import Image from "next/image";
import styles from "./home.module.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // this forces a rerender
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // this returns null on first render, so the client and server match
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit iusto
          sequi nostrum quaerat temporibus architecto magnam.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" fill />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" fill unoptimized />
      </div>
    </div>
  );
};

export default Home;
