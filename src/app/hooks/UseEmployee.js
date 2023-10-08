"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const UseEmployee = () => {
  const { token } = useContext(UserContext);
  const [attendence, setAttendence] = useState([]);

  useEffect(() => {
    if (token) {
      fetch("https://api.dvt.theyolostudio.com/auth/employee/management/", {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (!data.results) {
            console.log("something went wrong!");
          }
          setAttendence(data?.results[0]?.attendance_info);
        });
    }
  }, [token]);
  return { attendence };
};

export default UseEmployee;
