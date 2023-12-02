import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link target="_blank" href={"https://www.facebook.com/ninhhoanglong/"}>
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </Link>
        <Link
          target="_blank"
          href={"https://www.instagram.com/n.hoang.long2002/"}
        >
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
        <Link target="_blank" href={"https://www.tiktok.com/@ninhhoanglong"}>
          <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        </Link>
        <Link
          target="_blank"
          href={"https://www.youtube.com/channel/UCuOJ7vddbwcYz_XzNHFlVAA"}
        >
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </Link>
      </div>
      <div className={styles.logo}>LongNHBlog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
