import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layout/Main";
// import HomePage from "./pages/HomePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import MoviesPage from "./pages/MoviesPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
// const MoviesPageV2 = lazy(() => import("./pages/MoviesPageV2"));

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
            <Route
              path="/movie/:movieId"
              element={<MovieDetailsPage />}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
