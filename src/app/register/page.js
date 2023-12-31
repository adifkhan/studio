"use client";
import React, { useContext, useReducer, useState } from "react";
import styles from "@/app/styles/registration.module.css";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { BiSolidPencil } from "react-icons/bi";
import Link from "next/link";
import { initialState, reducer } from "../hooks/UseReducer";
import { useRouter } from "next/navigation";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [message, setMessage] = useState("");
  const { setToken } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (state.password !== state.confirmpassword) {
      return setMessage("Password did not match!");
    }
    const userinfo = {
      username: state.username,
      password: state.password,
      first_name: state.firstname,
      last_name: state.lastname,
    };
    // create a new user //
    fetch("https://api.dvt.theyolostudio.com/auth/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.id) {
          setLoading(false);
          return setMessage(data.errors[0]?.detail);
        }
        setToken(data.access);
        localStorage.setItem("accessToken", data.access);
        setMessage("");
        router.push("/");
        setLoading(false);
      });
  };
  return (
    <div className={styles.register_container}>
      <div className={styles.register_wrapper}>
        <div className={styles.bg_layer_register}></div>
        <div className={styles.form_wrapper}>
          <h2>Register</h2>
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
                <FaUserAlt />
              </span>
            </div>
            <div className={styles.input_group}>
              <input
                type="text"
                name="firstname"
                required
                onChange={handleChange}
              />
              <label htmlFor="">First Name</label>
              <span>
                <BiSolidPencil />
              </span>
            </div>
            <div className={styles.input_group}>
              <input
                type="text"
                name="lastname"
                required
                onChange={handleChange}
              />
              <label htmlFor="">Last Name</label>
              <span>
                <BiSolidPencil />
              </span>
            </div>
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
            <div className={styles.input_group}>
              <input
                type="password"
                name="confirmpassword"
                required
                onChange={handleChange}
              />
              <label htmlFor="">Confirm Password</label>
              <span>
                <FaLock />
              </span>
            </div>
            <p className="error_message">{message}</p>
            <button type="submit" className={styles.button}>
              {loading ? "Registering..." : "Register"}
            </button>
            <div className={styles.toggel_page}>
              <p>
                Have an Account? Let&apos;s <Link href="/login">Login</Link>
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

export default Register;
