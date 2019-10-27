// Обновляет одну позицию корзины, работает для 3 событий:
// 1.Увеличение количества, для этого в параметр quantity передаеться 1
// 2.Уменьшение количесва, для этого в параметр quantity передается -1
// 3.Полное удаление, для этого в quantity передаеться отрицательное полнае колличество(count) книг
const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  };
};
// Генерирует новый список книг для ф-и updateOrder
const updateCartItems = (cartItems, item, idx) => {
  // Если колличество книг (count) равняеться нулю, то эта книга будет удалена из списка
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }
  // Если idx(этот параметр будет передаваться из результата метода findIndex) = -1 , это означает
  // что такой книге нет в масиве, и произойдет добавление этой книги в конец списка книг
  if (idx === -1) {
    return [...cartItems, item];
  }
  // В случае если эта книга есть в списке, заменит ее на новую переданую параметрами
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};
// Генерирует новый список заказа
const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems }
  } = state;
  // Поиск нужной книги в bookList
  const book = books.find(({ id }) => id === bookId);
  // Проверка есть ли в текущей корзине выбраная книга
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  // Если есть то запишем эту книгу сюда, но если itemIndex будет -1 то item не будет использована
  const item = cartItems[itemIndex];
  // Осущестляет обновление, или создание новой книги в списке
  const newItem = updateCartItem(book, item, quantity);
  const newCartItems = updateCartItems(cartItems, newItem, itemIndex);
  return {
    cartItems: newCartItems,
    ...updateOrderTotalAndOrderCount(newCartItems)
  };
};
// Обновляет общую сумму заказа, и колличесво книг в корзине, используеться в updateOrder
const updateOrderTotalAndOrderCount = cartItems => {
  // Если в корзине нет книг, то вернет 0 
  if (cartItems.length === 0) {
    return {
      orderTotal: 0,
      orderCount: 0
    };
  }
  // Если в корзине есть одна книга, то вернет в каком количестве, и сумму заказа этой книги
  if (cartItems.length === 1) {
    return {
      orderTotal: cartItems[0].total,
      orderCount: cartItems[0].count
    };
  }
  // Если  в корзине больше одной книги, то вернет количество всех заказаных книг и их общую сумму
  if (cartItems.length > 1) {
    return {
      orderTotal: cartItems.reduce((first, last) => first.total + last.total),
      orderCount: cartItems.reduce((first, last) => first.count + last.count)
    };
  }
};


// Вторя часть ф-и reducer
const updateShoppingCart = (state, action) => {
  // Инициализация начального состояни корзины покупок
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      orderCount: 0
    };
  }

  switch (action.type) {
    // Обрабатывает длбавление книги в корзину
    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);
    // Обрабатывает удаление одной книги из позиции
    case "BOOK_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);
    // Обрабатывает полное удаление позиции
    case "ALL_BOOKS_REMOVED_FROM_CART":
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
