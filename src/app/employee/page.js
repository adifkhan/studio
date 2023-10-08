"use client";
import React from "react";
import BaseLayout from "../components/BaseLayout";
import styles from "@/app/styles/employee.module.css";
import UseEmployee from "../hooks/UseEmployee";

const Employee = () => {
  const { attendence } = UseEmployee();
  // console.log(attendence);
  return (
    <BaseLayout>
      <div className={styles.employee_container}>
        <div className={styles.employee_wrapper}>
          <h2>Attendence Profile</h2>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Employee Name</th>
                <th>Designation</th>
                <th>Date</th>
                <th>Check-in</th>
                <th>Check-Out</th>
              </tr>
            </thead>
            <tbody>
              {attendence.map((user, index) => (
                <tr key={index}>
                  <td>{user["Employee ID"]}</td>
                  <td>{user["Employee Name"]}</td>
                  <td>{user["Designation"]}</td>
                  <td>{user["Date"]}</td>
                  <td>{user["Check-In Time"]}</td>
                  <td>{user["Check-Out Time"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Employee;
