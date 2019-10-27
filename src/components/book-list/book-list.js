import React, { Component } from "react";
import { connect } from "react-redux";

import BookListItem from "../book-list-item.js";
import withBookstoreService from "../hoc";
import { fetchBooks , bookAddedToCart} from "../../actions";
// Ф-я compose является вспомогательной, для композиции ф-й и компонента 
import compose from "../../utils";
import Spiner from "../spiner";
import ErrorIndicator from "../error-indicator";

import "./book-list.css";
// Контейнер отвечающий за логику отлова ошибок и индикацию загрузки
class BookListContainer extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    // Загружает данные с псевдо-сервера в redux-store
    fetchBooks();
  }

  render() {
    // Все параметры получены из redux через mapStateToProps и mapDispatchToProps
    const { books, loading, error, addToCart } = this.props;
    // Индикация загрузки
    if (loading) return <Spiner />;
    // Уведомление об ошибке
    if (error) return <ErrorIndicator />;

    return <BookList books={books} addToCart={addToCart}/>;
  }
}
// Компонент отвечающий только за отрисовку списка книг
const BookList = ({ books, addToCart}) => {
  return (
    <ul className="book-list">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem book={book} addToCart={() => addToCart(book.id)}/>
          </li>
        );
      })}
    </ul>
  );
};
// Получает необходимые свойства из redux
const mapStateToProps = ({bookList:{ books, loading, error }}) => {
  return {
    books,
    loading,
    error
  };
};
// Получает необходимые для работы actions
const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    addToCart: (id) => () => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withBookstoreService,
  // Подключает redux к компоненту 
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookListContainer);
