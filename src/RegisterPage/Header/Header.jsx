import React from "react";
import Logo from "../../_assets/logo.svg";

export default () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="index.html">
          <img alt="logo.svg" src={Logo}></img>
        </a>
      </div>
      <div className="header-title">Онлайн запись</div>
    </header>
  );
};
