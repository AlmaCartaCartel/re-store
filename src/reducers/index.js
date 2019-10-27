import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';
// Оснвная функция reducer которая разделена на 2 ф-и : updateBookList, updateShoppingCart
const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
