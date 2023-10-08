"use client";
import React, { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "@/app/styles/dashboard.module.css";

const DataVisualization = ({ attendence, toggleChart }) => {
  const data = attendence.map((item) => {
    return {
      name: item["Employee Name"],
      date: item.Date,
      CheckIn:
        parseFloat(
          new Date(`Octobar 10, 2023 ${item["Check-In Time"]}`).getHours()
        ) +
        parseFloat(
          (
            new Date(`Octobar 10, 2023 ${item["Check-In Time"]}`).getMinutes() /
            60
          ).toFixed(2)
        ),
      CheckOut:
        parseFloat(
          new Date(`Octobar 10, 2023 ${item["Check-Out Time"]}`).getHours()
        ) +
        parseFloat(
          (
            new Date(
              `Octobar 10, 2023 ${item["Check-Out Time"]}`
            ).getMinutes() / 60
          ).toFixed(2)
        ),
    };
  });
  // console.log(data);
  return (
    <div className={styles.chart_wrapper}>
      {toggleChart === "linechart" && (
        <div className={styles.line_chart}>
          <LineChart
            width={1000}
            height={400}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="CheckIn" stroke="#8884d8" />
            <Line type="monotone" dataKey="CheckOut" stroke="#82ca9d" />
          </LineChart>
        </div>
      )}

      {toggleChart === "barchart" && (
        <div className={styles.bar_chart}>
          <BarChart
            width={1000}
            height={400}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="CheckIn" fill="#8884d8" />
            <Bar dataKey="CheckOut" fill="#82ca9d" />
          </BarChart>
        </div>
      )}
      {toggleChart === "piechart" && (
        <div className={styles.pie_chart}>
          <PieChart width={1000} height={400}>
            <Tooltip />
            <Pie
              data={data}
              dataKey="CheckIn"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            />
            <Pie
              data={data}
              dataKey="CheckOut"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={100}
              outerRadius={130}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </div>
      )}
    </div>
  );
};

export default DataVisualization;
