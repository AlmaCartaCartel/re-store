import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from "../src/components/app";

import store from './store';
import ErrorBoundry from './components/error-boundry';

import {BookstoreProvider} from './components/bookstore-service-context';
import BookstoreService from './service';

const bookStoreService = new BookstoreService();

ReactDOM.render(
    // Предоставляет доступ к Redax Store
    <Provider store={store}>
        {/* Обработка ошибок в компонетах */}
        <ErrorBoundry>
            {/* Роутер из пакета react-router */}
            <Router>
                {/* Передает сервис через Context API */}
                <BookstoreProvider value={bookStoreService}>
                    <App />
                </BookstoreProvider>
            </Router>
        </ErrorBoundry>
    </Provider>
    , document.getElementById("root"));
