import React from "react";
import { connect } from "react-redux";

import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
} from "../../actions";
import "./shoping-cart-table.css";
// Компонент отвечающий за корзину( отображение списка покупок)
const ShopingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  // Ф-я котороя генерирует весь список на основе полученых данных из redux-store
  const cartItem = (item, idx) => {
    const { id, title, count, total } = item;

    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}$</td>
        <td className="btn-group">
          {/* ОТвечает за увеличение количество выбраной книги*/}
          <button onClick={() => onIncrease(id)} className="btn btn-outline-success">
            <i className="fa fa-plus-circle"></i>
          </button>
          {/* Удаляет книгу из списка покупок */}
          <button onClick={() => onDelete(id)} className="btn btn-outline-danger">
            <i className="fa fa-trash"></i>
          </button>
          {/* ОТвечает за уменьшение количество выбраной книги*/}
          <button onClick={() => onDecrease(id)} className="btn btn-outline-warning">
            <i className="fa fa-minus-circle"></i>
          </button>
        </td>
      </tr>
    );
  };
  // Возвращает конечный результат списка покупок
  return (
    <div className="shping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(cartItem)}</tbody>
      </table>

      <div className="total-cost">Total: ${total}</div>
    </div>
  );
};
// Получение необходимых свойст из redux-store для работы компонента
const mapStateToProps = ({shoppingCart:{ cartItems, orderTotal }}) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};
// Передаёт actions к свойства компонента
const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDelete: allBooksRemovedFromCart,
    onDecrease: bookRemovedFromCart
  };

// Поключение компонента к redux-store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopingCartTable);
