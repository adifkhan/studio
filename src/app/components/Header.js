"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "@/app/styles/header.module.css";

const Header = () => {
  const [currentUser, setCurrentUser] = useState({});
  // get current user //
  const userInfo = {
    id: "16",
    username: "maynulislam",
    first_name: "Maynul",
    last_name: "Islam",
  };
  fetch("https://api.dvt.theyolostudio.com/auth/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <Link href="/">Studio.</Link>
      </div>
      <div className={styles.link}>
        <Link href="/login">Login</Link>
      </div>
    </header>
  );
};

export default Header;
