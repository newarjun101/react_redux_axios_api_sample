import { applyMiddleware, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { rootReducer } from "../reducer/rootReducer"

export const configureStore = () => {

    const middleWare  = [thunk];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
    const enhancers = composeEnhancers(applyMiddleware(...middleWare));
    const store = createStore(rootReducer(),enhancers);

    return store;
};
