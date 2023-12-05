import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { HiOutlineEye } from "react-icons/hi2";
import Link from "next/link";

const apiEndpoint =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_ENDPOINT_DEV
    : process.env.NEXT_PUBLIC_API_ENDPOINT_PROD;

const getData = async () => {
  const res = await fetch(`${apiEndpoint}api/get-featured-post`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.post}>
        {data?.img && (
          <div className={styles.imgContainer}>
            <Image src={data.img} fill alt="" className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <div className={styles.postDetail}>
            <div className={styles.postView}>
              <HiOutlineEye />
              {data?.views}
            </div>
            <div>
              <span className={styles.date}>
                {data.createdAt.substring(0, 10)} -{" "}
              </span>
              <span className={styles.category}>{data.catSlug}</span>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.desc.substring(0, 1500) + "...",
            }}
          />
          <Link className={styles.button} href={`/posts/${data.slug}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
