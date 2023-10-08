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
        <Link href="/">Studio.</Link>
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
    </header>
  );
};

export default Header;
