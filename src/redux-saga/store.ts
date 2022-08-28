import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

//  saga function
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

// const rootReducer = createRootReduce r(history);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(historyMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
