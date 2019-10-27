import { createStore , applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';

import reducers from "./reducers";
// Создание redux-store
const store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;
