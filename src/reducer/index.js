/**
 * Redux Store
 */
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from "./reducers";
import RootSaga from "./sagas";

//create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middlewares),
        )
    );

    sagaMiddleware.run(RootSaga);

    store.subscribe(() => {
       store.getState();
    });

    return store;
}

export const store = configureStore();
