import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="LongNH Blog" width={50} height={50} />
          <h1 className="styles.logoText">LongNHBlog</h1>
        </div>
        <p className={styles.desc}>
          Dolor proident eu deserunt ea reprehenderit irure ipsum id dolor
          labore adipisicing. Eu labore do commodo irure pariatur anim cillum ut
          in consequat officia. Culpa dolore mollit Lorem enim enim excepteur.
          Ea voluptate laboris mollit sunt ad consectetur irure amet ut eiusmod
          laboris amet ullamco cillum. Ad ullamco nisi enim elit. Excepteur nisi
          irure voluptate quis elit ea enim labore ex sunt nulla sunt.
        </p>
        <div className={styles.icons}>
          <Link href={"https://www.facebook.com/ninhhoanglong/"}>
            <Image src="/facebook.png" alt="" width={18} height={18} />
          </Link>
          <Link href={"https://www.instagram.com/n.hoang.long2002/"}>
            <Image src="/instagram.png" alt="" width={18} height={18} />
          </Link>
          <Link href={"https://www.tiktok.com/@ninhhoanglong"}>
            <Image src="/tiktok.png" alt="" width={18} height={18} />
          </Link>
          <Link
            href={"https://www.youtube.com/channel/UCuOJ7vddbwcYz_XzNHFlVAA"}
          >
            <Image src="/youtube.png" alt="" width={18} height={18} />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.facebook.com/ninhhoanglong/">Facebook</Link>
          <Link href="https://www.instagram.com/n.hoang.long2002/">
            Instagram
          </Link>
          <Link href="https://www.tiktok.com/@ninhhoanglong">Tiktok</Link>
          <Link href="https://www.youtube.com/channel/UCuOJ7vddbwcYz_XzNHFlVAA">
            Youtube
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
