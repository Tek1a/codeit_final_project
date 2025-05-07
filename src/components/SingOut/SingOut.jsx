"use client";

import { useRouter } from "next/navigation";
import styles from "./SingOut.module.css";  // შესატყვისი სტილის Import

const SignOut = () => {
  const router = useRouter();
  const handleSignOut = () => {
    localStorage.removeItem("user");
    router.replace("/");
  };

  return (
    <button onClick={handleSignOut} className={styles.signOutButton}>
      Sign Out
    </button>
  );
};

export default SignOut;