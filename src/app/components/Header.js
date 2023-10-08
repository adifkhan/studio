"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import styles from "@/app/styles/header.module.css";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <Link href="/">Silver Studio</Link>
      </div>
      <div>
        {user.username ? (
          <p className={styles.user_profile}>{user.username}</p>
        ) : (
          <Link href="/login" className={styles.link}>
            Login
          </Link>
        )}
      </div>
      <div className={styles.warning}>
        <span>
          please login with username: yolostudio, pass: 123456 .other accounts
          causes issue. Althouth you can create new accounts.
        </span>
      </div>
    </header>
  );
};

export default Header;
