import styles from "./nav.module.scss";
//import { NavLink } from "react-router-dom";
import cartoon from "../../assets/images/Cartoon.png";

interface LinkProps {
  title: string;
  link: string;
}

const menuList: LinkProps[] = [
  {
    link: "",
    title: "TRIPS",
  },
  {
    link: "",
    title: "RECENTLY VIEWED",
  },
  {
    link: "",
    title: "BOOKINGS",
  },
];

const Nav = () => {
  return (
    <nav>
      <ul>
        {menuList.map((menu, index) => (
          <li className={styles.list} key={index}>
            {menu.title}
          </li>
        ))}
        <li>
          <img className={styles.img} src={cartoon} alt="avatar" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
