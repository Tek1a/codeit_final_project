import Image from "next/image";
import styles from "./page.module.css";

const Profile = async () => {
  const data = await fetch("https://dummyjson.com/users/1");
  const profile = await data.json();

  console.log(profile.image);

  return (
    <div>
      <Image
        src={profile.image}
        alt="Profile Image"
        width={500}
        height={500}
      />
      {profile.firstName} {profile.lastName}
    </div>
  );
};

export default Profile;