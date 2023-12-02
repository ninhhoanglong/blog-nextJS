import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";

const apiEndpoint =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_ENDPOINT_DEV
    : process.env.NEXT_PUBLIC_API_ENDPOINT_PROD;

const getData = async (page, cat) => {
  const res = await fetch(
    `${apiEndpoint}api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 4;

  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
