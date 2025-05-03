"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLoginChange = () => {
    setError("");
    setLogin(!login);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (login) {
      
      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: "m38rmF$",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            router.replace("/products");
          }
        })
        .catch((error) => {
          console.log("Login error:", error.message);
        });
    } else {
      const fields = [username, email, password];
      if (fields.some(field => !field)) {
        setError("Please fill in all the fields.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        return;
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
      }

      fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.id) {
            router.replace("/products");
          } else {
            setError("Registration failed. Please try again.");
          }
        })
        .catch((error) => {
          console.log("Registration error:", error.message);
          setError("Something went wrong.");
        });
    }
  };

  return (
    <main className={styles.main}>
      <form className={styles.container} onSubmit={handleSubmit}>
        {login ? (
          <>
            <h3 className={styles.signin}>Sign In</h3>
            <p className={styles.desc}>Please sign in to access market.</p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              placeholder="Username"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              type="password"
              placeholder="Password"
            />
            <button className={styles.button} type="submit">
              Sign In
            </button>
            <button
              onClick={handleLoginChange}
              className={styles.notResgitered}
              type="button"
            >
              Not Registered? Sign up
            </button>
          </>
        ) : (
          <>
            <h3 className={styles.signin}>Sign Up</h3>
            <p className={styles.desc}>Please sign up to access market.</p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              placeholder="Username"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              type="password"
              placeholder="Password"
            />
            {error ? <p className={styles.error}>{error}</p> : null}
            <button className={styles.button} type="submit">
              Sign Up
            </button>
            <button
              onClick={handleLoginChange}
              className={styles.notResgitered}
              type="button"
            >
              Already Registered? Sign in
            </button>
          </>
        )}
      </form>
    </main>
  );
}

