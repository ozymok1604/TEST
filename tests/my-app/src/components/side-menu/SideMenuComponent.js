import React from "react";

import styles from "./styles.css";

import Logo from "../../svg/logo.svg";

import Dashboard from "../../svg/dashboard.svg";

import HelpSVG from "../../svg/help.svg";

import Income from "../../svg/income.svg";

import Product from "../../svg/product.svg";

import Promote from "../../svg/promote.svg";

import Customers from "../../svg/customers.svg";

const SideMenuComponent = () => {
  return (
    <div className="side-menu">
      <img className="logo" src={Logo} />
      <div className="column-menu">
        <div className="menu-element">Dashboard</div>
        <div className="menu-element">Product</div>

        <div className="menu-element">Customers</div>

        <div className="menu-element">Income</div>
        <div className="menu-element">Promote</div>
        <div className="menu-element">Help</div>
      </div>
    </div>
  );
};

export { SideMenuComponent };
