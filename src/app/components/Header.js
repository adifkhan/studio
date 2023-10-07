"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import styles from "@/app/styles/header.module.css";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  // console.log(user);

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
