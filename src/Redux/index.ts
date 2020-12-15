import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./reducer";
import saga from "./saga";

// Saga
const sagaMiddleware = createSagaMiddleware();

// Logger
const logger = createLogger({
  collapsed: true,
  diff: true,
});

// Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger),);

sagaMiddleware.run(saga);

export default store;
