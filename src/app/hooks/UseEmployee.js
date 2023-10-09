"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/navigation";

const UseEmployee = () => {
  const { token } = useContext(UserContext);
  const [attendence, setAttendence] = useState(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!token) {
      setLoading(false);
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
        setLoading(false);
      });
  }, [token, router]);
  return { attendence, loading };
};

export default UseEmployee;
