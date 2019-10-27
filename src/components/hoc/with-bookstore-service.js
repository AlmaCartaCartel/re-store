import React from "react";

import { BookstoreConsumer } from "../bookstore-service-context";
// Вспомогательный hoc компонент, который предоставляет доступ оборачеваему компоненту к сервису
const withBookstoreService = Wraped => {
  return props => {
    return (
      <BookstoreConsumer>
        {bookstoreService => {
          return <Wraped bookstoreService={bookstoreService} {...props} />;
        }}
      </BookstoreConsumer>
    );
  };
};

export default withBookstoreService;
