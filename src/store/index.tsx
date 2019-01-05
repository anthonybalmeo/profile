import { createStore } from "redux";
import rootReducer from "./reducers";
import { createBrowserHistory, History } from 'history'

export const history: History = createBrowserHistory()

export default createStore(rootReducer);
