import React from "react";

import "./spiner.css";
// Компонент отображает индикацию загрузки
export const Spiner = () => {
  return (
    <div className="lds-css ng-scope row justify-content-center">
      <div className="lds-gear">
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
