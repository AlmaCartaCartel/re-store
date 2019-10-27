import React from "react";
// Создание контекста в виде bookstore-service 
export const {
  Provider: BookstoreProvider,
  Consumer: BookstoreConsumer
} = React.createContext();
