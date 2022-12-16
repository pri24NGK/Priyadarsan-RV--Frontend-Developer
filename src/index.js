import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { LandingReducer } from "./store/Landing/Reducer";
import axios from "axios";
import { FeedBackReducer } from "./store/FeedBack/Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const RootReducers = combineReducers({
  Landing: LandingReducer,
  FeedBack: FeedBackReducer,
});

const store = createStore(
  RootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

axios.defaults.baseURL = "https://api.spacexdata.com/v3";

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
