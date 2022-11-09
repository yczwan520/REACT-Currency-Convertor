import React from "react";
import { Outlet, Link } from "react-router-dom";
import style from "./Nav.module.scss";

const Nav = () => (
  <div>
    <div className={style.Navigation}>
      <ul>
        <li>
          <Link className={style.nav} to="/">
            Main Page
          </Link>
        </li>
        <li>
          <Link className={style.nav} to="/convertor">
            Convertor
          </Link>
        </li>
        <li>
          <Link className={style.nav} to="/Goback">
            About This App
          </Link>
        </li>
      </ul>
    </div>
    <Outlet />
  </div>
);
export default Nav;
