"use client";
import React, { useState } from "react";
import Papa from "papaparse";
import styles from "./page.module.css";
import BaseLayout from "./components/BaseLayout";

export default function Home() {
  const [fileData, setFileData] = useState();

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

  const handleSave = (e) => {
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
      .then((data) => console.log(data));
  };
  return (
    <BaseLayout>
      <div>
        <h1>Record Your Attendence</h1>
        <form onSubmit={handleSave}>
          <label htmlFor="">input attendence</label>
          <input type="file" name="file" accept=".csv" onChange={handleFile} />
          <input type="submit" value="Save" />
        </form>
      </div>
    </BaseLayout>
  );
}
