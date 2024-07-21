import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Tanny
      </Link>
      <div className={styles.text}>
        &copy; 2024 Social Media App. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
