import React from "react";
import Logo from "../../_assets/logo.svg";
import Preloader from "../../_assets/preloader.gif";
import cn from "classnames/dedupe";

export default ({ formState }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="index.html">
          <img
            alt="logo.svg"
            src={formState.isSubmitting ? Preloader : Logo}
          ></img>
        </a>
      </div>
      <div
        className={cn("header-title", {
          isSubmitting: formState.isSubmitting,
        })}
      >
        Онлайн запись
      </div>
    </header>
  );
};
