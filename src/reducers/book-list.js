// Первая часть ф-и reducer, занимаеться обработкой состояния списка книг
const updateBookList = (state, action) => {
    // Инициализация начально состояния
    if (state === undefined) {
      return {
        books: [],
        loading: true,
        error: null
      };
    }
    
    switch (action.type) {
      // Отправляет запрос на сервер, пока выполняется отобразает индикацию загрузки
      case 'FETCH_BOOKS_REQUEST':
        return {
          books: [],
          loading: true,
          error: null
        };
      // Этот экшкн вызовется случае успешной загрузки, и отобразит список книг
      case 'FETCH_BOOKS_SUCCESS':
        return {
          books: action.payload,
          loading: false,
          error: null
        };
      // Этот екшен вызовется в случае ошибки на сервере, и отобразит ошибку
      case 'FETCH_BOOKS_FAILURE':
        return {
          books: [],
          loading: false,
          error: action.payload
        };
      // По умолчанию вернет состояние без изменений
      default:
        return state.bookList;
    }
  };
  
  export default updateBookList;