import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

import "./shop-header.css";
// Компонент отвечает за шапку всего преложения
const ShopHeader = ({ count = 0, total = 0 }) => {
  return (
    <header className="shop-header row justify-content-between">
      <Link to="/">
        <div className="logo text-dark">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="text-dark cart-box">
          <i className="cart-icon fa fa-shopping-cart"></i> {count} items $
          {total}
        </div>
      </Link>
    </header>
  );
};
// Ф-я обеспечивает доступ компонента к конкретным значениям из redux-store
const mapStateToProps = ({shoppingCart:{orderCount, orderTotal}}) => {
  return{
    count: orderCount,
    total: orderTotal
  }
}
// Подключени компонента к redux
export default connect(mapStateToProps)(ShopHeader)