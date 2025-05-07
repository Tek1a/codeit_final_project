import Image from "next/image";
import styles from "./page.module.css";
import SignOut from "@/components/SingOut/SingOut";

const Profile = async () => {
  let profile;
  try {
    const data = await fetch("https://dummyjson.com/users/1");
    profile = await data.json();

    if (profile.message) {
      throw Error(profile.message);
    }
  } catch (error) {
    throw Error(error);
  }

  return (
    <div className={styles.container}>
      <Image
        src={profile.image}
        className={styles.image}
        alt="Profile Image"
        width={100}
        height={100}
      />
      <section className={styles.section}>
        <div className={styles.infoWrapper}>
          <p className={styles.label}>სახელი:</p>
          <p>{profile.firstName}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.label}>მაიდენნეიმი:</p>
          <p>{profile.maidenName}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.label}>გვარი:</p>
          <p>{profile.lastName}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.label}>მეილი:</p>
          <p>{profile.email}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.label}>დაბადების თარიღი:</p>
          <p>{profile.birthDate}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.label}>სრული მისამართი:</p>
          <p>
            {profile.address.address}, {profile.address.state}, {profile.address.country}
          </p>
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.label}>უნივერსიტეტი:</p>
          <p>{profile.university}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.label}>კომპანია:</p>
          <p>{profile.company.name}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.label}>კომპანიის მისამართი:</p>
          <p>
            {profile.company.address.address}, {profile.company.address.state}, {profile.company.address.country}
          </p>
        </div>
      </section>
      <SignOut />
    </div>
  );
};

export default Profile;
