import { createBrowserRouter, createHashRouter } from "react-router";
import App from "./App.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CharacterDetail from "./pages/CharacterDetail.jsx";
import CharactersPage from "./pages/CharactersPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import FavoriteCharactersPage from "./pages/FavoriteCharactersPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";

const createRouter = import.meta.env.PROD
  ? createHashRouter
  : createBrowserRouter;

const router = createRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "characters", element: <CharactersPage /> },
      { path: "characters/:id", element: <CharacterDetail /> },
      { path: "favorites", element: <FavoriteCharactersPage /> },
      { path: "review", element: <ReviewPage /> },
      { path: "*", element: <NotFound /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
