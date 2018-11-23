import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadLinks, saveLinks } from "./storage";
import links from "./bookmarkData.json";

// there is surely a better way to do this, but for now it magically works. on assignment, it loads the result into localStorage!
const linkData = saveLinks(links);

const persistedState = loadLinks();

const store = createStore(rootReducer, persistedState);
export default store;
