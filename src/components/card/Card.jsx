import Image from "next/image";
import styles from "./card.module.css";
import React from "react";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Anim eiusmod occaecat eu enim occaecat ipsum aliqua qui et.</h1>
        </Link>
        <p className={styles.desc}>
          Deserunt dolore sint reprehenderit fugiat cupidatat in mollit magna.
          Enim pariatur enim ea voluptate nulla nostrud duis cupidatat aliqua
          quis. Proident magna mollit aliqua voluptate nostrud adipisicing
          nostrud quis enim fugiat ut ipsum. Ullamco proident aute dolor ullamco
          nostrud culpa. Qui commodo mollit mollit consectetur laborum ea esse
          nisi incididunt aute elit consectetur est reprehenderit.
        </p>
        <Link href="/" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
