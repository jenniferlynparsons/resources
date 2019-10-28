import { createStore, applyMiddleware } from "redux";
import bookmarksReducer from "./reducers/bookmarksReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadLinks, saveLinks } from "./storage";
import links from "./bookmarkData.json";

// Comment out above and uncomment this line for testing functionality with a smaller data set
// import links from "./bookmarktest.json";

// there is surely a better way to do this, but for now it magically works. on assignment, it loads the result into localStorage.
const linkData = saveLinks(links);

const persistedState = loadLinks();

const store = createStore(
  bookmarksReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
