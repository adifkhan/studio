"use client";
import React, { useState } from "react";
import styles from "@/app/styles/sidebar.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import Link from "next/link";

const sidebarItems = [
  {
    title: "Attendence",
    icon: <MdDateRange />,
    link: "/attendence",
  },
  {
    title: "Dashboard",
    icon: <MdSpaceDashboard />,
    link: "/",
  },
  {
    title: "Employee",
    icon: <BsPeopleFill />,
    link: "/",
  },
  {
    title: "Employee",
    icon: <BsPeopleFill />,
    link: "/",
  },
  {
    title: "Employee",
    icon: <BsPeopleFill />,
    link: "/",
  },
];
const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className={styles.sidebar_wrapper}>
      <button
        className={
          collapse ? `${styles.sidebar_retoggle}` : `${styles.sidebar_toggle}`
        }
        onClick={() => setCollapse(!collapse)}
      >
        <IoIosArrowForward />
      </button>
      <aside
        className={
          collapse ? `${styles.sidebar_collapse}` : `${styles.sidebar}`
        }
      >
        <nav className={styles.navbar}>
          <div className={styles.nav_list}>
            {sidebarItems.map((sidebarItem, index) => (
              <div key={index} className={styles.nav_item}>
                <Link href={sidebarItem.link}>
                  <span className={styles.nav_icon}>{sidebarItem.icon}</span>{" "}
                  <span className={styles.nav_title}>{sidebarItem.title}</span>{" "}
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
