"use client";

import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("accessToken");
    setToken(userToken);

    // // get current user //
    // if (token) {
    //   console.log(token);
    //   fetch("https://api.dvt.theyolostudio.com/auth/user", {
    //     method: "GET",
    //     headers: {
    //       authorization: `Bearer ${token}`,
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => console.log(data.user));
    // }
  }, [token]);
  return (
    <UserContext.Provider value={{ user, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
