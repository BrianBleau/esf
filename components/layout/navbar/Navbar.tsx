import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Navbar(props: any) {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const router = useRouter();

  const burgerHandler = (e: any) => {
    e.preventDefault;
    if (burgerOpen === false) {
      document.body.style.overflow = "hidden";
      setBurgerOpen(true);
    }
    if (burgerOpen === true) {
      document.body.style.overflow = "scroll";
      setBurgerOpen(false);
    }
  };

  useEffect(() => {
    setBurgerOpen(false);
  }, [router.asPath]);

  return (
    <>
      <div
        className={
          burgerOpen === true
            ? `${styles.overlay} ${styles.active}`
            : styles.overlay
        }
        onClick={burgerHandler}
      />
      <nav className={styles.navContainer}>
        <Link href={"/"}>ESF</Link>
        <ul
          className={
            burgerOpen ? `${styles.navMenu} ${styles.active}` : styles.navMenu
          }
        >
          <li className="nav-item">
            <div onClick={burgerHandler}>
              <Link href={"/"}>
                <a className={router.pathname == "/" ? styles.active : ""}>
                  Home
                </a>
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <div onClick={burgerHandler}>
              <Link href={"/services"}>
                <a
                  className={
                    router.pathname == "/services" ? styles.active : ""
                  }
                >
                  Services
                </a>
              </Link>
            </div>
          </li>
        </ul>
        <div
          className={
            burgerOpen === true
              ? `${styles.burger} ${styles.active} `
              : styles.burger
          }
          onClick={burgerHandler}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </nav>
    </>
  );
}
