"use client";
import React, { useReducer, useState } from "react";
import styles from "@/app/styles/registration.module.css";
import Link from "next/link";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { initialState, reducer } from "../hooks/UseReducer";

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //create userinfo //
    const userInfo = {
      username: state.username,

      password: state.password,
    };
    // request a login //
    console.log(userInfo);
    fetch("https://api.dvt.theyolostudio.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.id) {
          return setMessage(data.errors[0]?.detail);
        }
        // setUser(data);
        // setMessage("");
        // router.push("/");
        console.log(data);
      });
  };
  return (
    <div className={styles.register_container}>
      <div className={styles.register_wrapper}>
        <div className={styles.bg_layer_login}></div>
        <div className={styles.form_wrapper}>
          <h2>Login</h2>
          <form className={styles.register_form} onSubmit={handleSubmit}>
            <div className={styles.input_group}>
              <input
                type="text"
                name="username"
                required
                onChange={handleChange}
              />
              <label htmlFor="">Username</label>
              <span>
                <MdEmail />
              </span>
            </div>
            {/* <div className={styles.input_group}>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
              />
              <label htmlFor="">Email</label>
              <span>
                <MdEmail />
              </span>
            </div> */}
            <div className={styles.input_group}>
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
              />
              <label htmlFor="">Password</label>
              <span>
                <FaLock />
              </span>
            </div>
            <p className="error_message">{message}</p>
            <button type="submit" className={styles.button}>
              Login
            </button>
            <div className={styles.toggel_page}>
              <p>
                New to Studio? Let&apos;s <Link href="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
        <div className={styles.welcome_text}>
          <h3>Welcome to Studio</h3>
          <p>We really care about you. Wish you have a good day!</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
