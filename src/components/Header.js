import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <p className="header-logo">Pharma</p>

      <div className="header-search">
        <input name="search" type="text" placeholder="search" />
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello Guest </span>
          <span className="header-optionLineTwo">Sign In </span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Returns </span>
          <span className="header-optionLineTwo">& orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Your </span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
