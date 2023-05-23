import "./App.css";
import Header from "./components/LandingPage/Header";
import Body from "./components/LandingPage/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/LandingPage/MainContainer";
import WatchPage from "./components/WatchPage/WatchPage";
import SearchPage from "./components/SearchedPage/SearchPage";
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
