"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/navigation";

const UseEmployee = () => {
  const { token } = useContext(UserContext);
  const [attendence, setAttendence] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      return router.push("/login");
    }
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
  }, [token, router]);
  return { attendence };
};

export default UseEmployee;
