import React from "react";
import { NavLink } from "react-router-dom";
import SidebarContainer from "../Sidebar/SidebarContainer";
import NavbarCSS from './Nav.module.css';
const Nav = (props) => {
  return (
    <nav className={NavbarCSS.nav}>
      <ul className={NavbarCSS.ul}>
        <NavLink className={NavbarCSS.navLink} to="/users" activeClassName={NavbarCSS.activeLink}><li key={1} className={NavbarCSS.item}>Users</li></NavLink>
        <NavLink className={NavbarCSS.navLink} to="/dialogs" activeClassName={NavbarCSS.activeLink}><li key={2} className={NavbarCSS.item}> Messages </li></NavLink>
        <NavLink className={NavbarCSS.navLink} to="/profile" activeClassName={NavbarCSS.activeLink}><li key={3} className={NavbarCSS.item}> Profile </li></NavLink>
        {/* <NavLink className={NavbarCSS.navLink} to="/news" activeClassName={NavbarCSS.activeLink}><li key={4} className={NavbarCSS.item}> News </li></NavLink> */}
        {/* <NavLink className={NavbarCSS.navLink} to="/musics" activeClassName={NavbarCSS.activeLink}><li key={5} className={NavbarCSS.item}> Music </li></NavLink> */}
        {/* <li className={NavbarCSS.item}> </li>  */} <br/>
        <NavLink className={NavbarCSS.navLink} to="/settings" activeClassName={NavbarCSS.activeLink}><li key={6} className={NavbarCSS.item}> Settings </li></NavLink>
        <SidebarContainer />
      </ul>
    </nav>
  );
}

export default Nav;