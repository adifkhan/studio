"use client";
import React, { useContext, useState } from "react";
import BaseLayout from "../components/BaseLayout";
import styles from "@/app/styles/dashboard.module.css";
import { UserContext } from "../context/UserContext";
import Image from "next/image";
import usermock from "@/assets/usermock.png";
import DataVisualization from "../components/DataVisualization";
import UseEmployee from "../hooks/UseEmployee";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { attendence, loading } = UseEmployee();
  const [toggleChart, setToggleChart] = useState("barchart");
  if (loading) {
    return <div className="loading">Loading...Please wait</div>;
  }
  return (
    <BaseLayout>
      <div className={styles.dashboard_container}>
        <div className={styles.dashboard_wrapper}>
          <div className={styles.user_greeting}>
            <div className={styles.user_mock}>
              <Image
                src={usermock}
                quality={100}
                alt="user-mock"
                className={styles.image}
              ></Image>
            </div>
            <div className={styles.greeting}>
              <p>
                Welcome Back <span> {user?.username}</span>. Hope you are doing
                well.
              </p>
            </div>
          </div>
          <div className={styles.toggel_wrapper}>
            <div className={styles.toggel_box}>
              <p
                className={
                  toggleChart === "linechart"
                    ? `${styles.active_chart}`
                    : `${styles.disabled_chart}`
                }
                onClick={() => setToggleChart("linechart")}
              >
                Line Chart
              </p>
              <p
                className={
                  toggleChart === "barchart"
                    ? `${styles.active_chart}`
                    : `${styles.disabled_chart}`
                }
                onClick={() => setToggleChart("barchart")}
              >
                Bar Chart
              </p>
              <p
                className={
                  toggleChart === "piechart"
                    ? `${styles.active_chart}`
                    : `${styles.disabled_chart}`
                }
                onClick={() => setToggleChart("piechart")}
              >
                Pie Chart
              </p>
            </div>
            <div className={styles.attendence_count}>
              <p>Total Attendence: {attendence?.length}</p>
            </div>
          </div>
          <DataVisualization
            attendence={attendence}
            toggleChart={toggleChart}
          />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Dashboard;
