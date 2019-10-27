import React from "react";

import "./book-list-item.css";
// Компонент отвечающий за отрисовку одной книги, используеться в компоненте bookList, все параметры передаются в родителе 
const BookListItem = ({ book, addToCart }) => {
  const { title, author, price, cover } = book;

  return (
    <div className="book-list-item row">
      <div className="book-cover">
        <img src={cover} alt="cover" />
      </div>
      <div className="book-details">
        <span href="/" className="book-title">
          {" "}
          {title}
        </span>
        <div className="book-author">{author}</div>
        <div className="book-price">{price}$</div>
        <button onClick={addToCart()} className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
