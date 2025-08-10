import { useEffect, useState } from "react";

import styles from "./Navigation.module.css";
import { Link, useLocation } from "react-router";

const Navigation = () => {
  const location = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <nav>
      <Link
        className={active === "/"
          ? `${styles.link} ${styles.linkActive}`
          : styles.link
        }
        to={"/"}>Home
      </Link>
      <Link
        className={active === "/movies"
          ? `${styles.link} ${styles.linkActive}`
          : styles.link
        }
        to={"/movies"}>
        Movies
      </Link>
      <Link
        className={active === "/actors"
          ? `${styles.link} ${styles.linkActive}`
          : styles.link
        }
        to={"/actors"}>
        Actors
      </Link>
    </nav>
  )
};

export default Navigation;