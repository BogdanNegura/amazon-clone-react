import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineOne"> Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineTwo">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineThree">Your</span>
          <span className="header__optionLineThree">Prime</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineFour"></span>
          <span className="header__optionLineFour"></span>
        </div>
      </div>
    </div>
  );
}

export default Header;
