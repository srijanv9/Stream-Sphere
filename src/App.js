import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";
function App() {
  // const cors = require("cors");
  // App.use(cors());
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "search_query",
          element: <SearchPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <div>
          <Header />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </>
  );
}

export default App;
