import React from "react";
import "./Sidebar.scss";
import logo from "../../assets/img/common/logo.png";
import { Link, NavLink } from "react-router-dom";

import active_users from "../../assets/img/common/active_users.svg";
import active_contact from "../../assets/img/common/active_contact.svg";
import active_news from "../../assets/img/common/active_news.svg";
import active_offers from "../../assets/img/common/active_ofers.svg";
import active_statistics from "../../assets/img/common/active_statistics.svg";
import active_transactions from "../../assets/img/common/active_transactions.svg";

import inactive_users from "../../assets/img/common/inactive_users.svg";
import inactive_contact from "../../assets/img/common/inactive_contact.svg";
import inactive_news from "../../assets/img/common/inactive_news.svg";
import inactive_offers from "../../assets/img/common/inactive_ofers.svg";
import inactive_statistics from "../../assets/img/common/inactive_statistics.svg";
import inactive_transactions from "../../assets/img/common/inactive_transactions.svg";

export const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col pt-8">
      <div className="flex justify-center align-middle">
        <img src={logo} />
      </div>
      <ul className="mt-7 flex flex-col">
        <li>
          <NavLink activeClassName="active-link" className="px-4 py-7 flex items-center" to="users">
            <img className="active-icon w-9 mr-6 " src={active_users} alt="" />
            <img className="inactive-icon w-9 mr-6 " src={inactive_users} alt="" />
            <span>Usuarios</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" className="px-4 py-7 flex items-center" to="offers">
            <img className="active-icon w-9 mr-6 " src={active_offers} alt="" />
            <img className="inactive-icon w-9 mr-6 " src={inactive_offers} alt="" />
            <span>Ofertas</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" className="px-4 py-7 flex items-center" to="transactions">
            <img className="active-icon w-9 mr-6 " src={active_transactions} alt="" />
            <img className="inactive-icon w-9 mr-6 " src={inactive_transactions} alt="" />
            <span>Transacciones</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" className="px-4 py-7 flex items-center" to="news">
            <img className="active-icon w-9 mr-6 " src={active_news} alt="" />
            <img className="inactive-icon w-9 mr-6 " src={inactive_news} alt="" />
            <span>Noticias</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" className="px-4 py-7 flex items-center" to="contact">
            <img className="active-icon w-9 mr-6 " src={active_contact} alt="" />
            <img className="inactive-icon w-9 mr-6 " src={inactive_contact} alt="" />
            <span>Contacto</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" className="px-4 py-7 flex items-center" to="statistics">
            <img className="active-icon w-9 mr-6 " src={active_statistics} alt="" />
            <img className="inactive-icon w-9 mr-6 " src={inactive_statistics} alt="" />
            <span>Estadisticas</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
