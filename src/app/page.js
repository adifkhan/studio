"use client";
import React, { useState } from "react";
import Papa from "papaparse";
import styles from "./page.module.css";
import BaseLayout from "./components/BaseLayout";
import Link from "next/link";

export default function Home() {
  const [fileData, setFileData] = useState();
  const [message, setMessage] = useState("");

  /* 
  const handleFile = (e) => {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setFileData(results.data);
      },
    });
  };
  const handleSave = (e) => {
    e.preventDefault();
    fetch("https://api.dvt.theyolostudio.com/auth/employee/management/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(fileData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
 */
  const handleFile = (e) => {
    setFileData(e.target.files[0]);
  };
  // console.log(fileData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("csv", fileData);
    fetch("https://api.dvt.theyolostudio.com/auth/employee/management/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(
          `Couldn't cope with the apis. I tried to POST data both in 'FormData' and 'json' formate several times. Every time server responded with - status code: 501, error: server error, details: not implemented, please kindly check my code at https://github.com/adifkhan/studio`
        );
      });
  };
  return (
    <BaseLayout>
      <div className={styles.attendence_container}>
        <div className={styles.attendence_wrapper}>
          <h2>Upload Attendence in .csv file</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              name="file"
              accept=".csv"
              onChange={handleFile}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className={styles.dev_message}>
          <p>{message}</p>
        </div>
      </div>
    </BaseLayout>
  );
}
