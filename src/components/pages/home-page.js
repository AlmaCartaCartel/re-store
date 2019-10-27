import React from 'react';

import BookList from '../book-list';
import ShopingCartTable from '../shoping-cart-table';
// Компонент отображающий главную страницу
const HomePage = () => {
    return (
        <div>
            {/* Список книг */}
            <BookList />
            {/* Корзина */}
            <ShopingCartTable />
        </div>
    )
}

export default HomePage;