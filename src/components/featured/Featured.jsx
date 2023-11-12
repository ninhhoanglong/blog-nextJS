import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Culpa ut proident aliquip</b>. Exercitation et occaecat Lorem irure
        ullamco irure nisi exercitation cupidatat.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Esse id excepteur deserunt id minim ullamco in velit.
          </h1>
          <p className={styles.postDesc}>
            Minim sint tempor nulla culpa incididunt incididunt amet sint
            cillum. Laboris dolor elit adipisicing dolore nostrud ex consequat
            ullamco nisi dolore anim ipsum. Exercitation adipisicing anim sunt
            labore esse fugiat dolor dolore et ullamco. Sit aliquip occaecat
            veniam officia do ad dolore reprehenderit nulla cillum sint. Laboris
            cillum consequat consequat commodo sint officia ipsum fugiat dolore.
            Non irure culpa eiusmod non in elit voluptate pariatur excepteur
            aliqua ex in.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
