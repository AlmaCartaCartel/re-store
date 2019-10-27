// Отправляет запрос на фейковый сервер
const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST"
  };
};
// Если отправленый запрос был успешен
const booksLoaded = newBooks => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks
  };
};
// Если отправлений запрос был не успешен
const booksError = error => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error
  };
};
// Добавляет книгу в корзину
export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};
// Удаляет одну книгу из корзины
export const bookRemovedFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId
  };
};
// Удаляет все книги из корзины
export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId
  };
};
// Выполняет запрос на фейк-сервер
export const fetchBooks = (bookstoreService, dispatch) => () => {
  // Запрос
  dispatch(booksRequested());

  bookstoreService
    .getBooks()
    // успех
    .then(data => dispatch(booksLoaded(data)))
    // ошибка
    .catch(error => dispatch(booksError(error)));
};

