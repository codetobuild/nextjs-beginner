import Link from "next/link";
import style from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.navWrapper}>
        <h1>LOGO</h1>
        <ul className={style.list}>
          <li className={style.listItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={style.listItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={style.listItem}>
            <Link href="/others">Others</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
