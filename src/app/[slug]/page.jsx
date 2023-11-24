import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Pariatur duis veniam mollit aute deserunt quis aliqua eiusmod.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>LongNH</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Magna pariatur et enim ad et sit nulla cillum adipisicing elit
              cillum enim proident. Incididunt velit sunt proident deserunt
              excepteur occaecat nisi laboris. Id voluptate sunt exercitation
              pariatur proident.
            </p>
            <h2>
              Magna pariatur et enim ad et sit nulla cillum adipisicing elit
              cillum enim proident.
            </h2>
            <p>
              Magna pariatur et enim ad et sit nulla cillum adipisicing elit
              cillum enim proident. Incididunt velit sunt proident deserunt
              excepteur occaecat nisi laboris. Id voluptate sunt exercitation
              pariatur proident.
            </p>
            <p>
              Magna pariatur et enim ad et sit nulla cillum adipisicing elit
              cillum enim proident. Incididunt velit sunt proident deserunt
              excepteur occaecat nisi laboris. Id voluptate sunt exercitation
              pariatur proident.
            </p>
            <p>
              Magna pariatur et enim ad et sit nulla cillum adipisicing elit
              cillum enim proident. Incididunt velit sunt proident deserunt
              excepteur occaecat nisi laboris. Id voluptate sunt exercitation
              pariatur proident.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
