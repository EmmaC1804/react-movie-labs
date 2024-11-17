import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TrendingPage from "./pages/trendingTodayPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MustWatchPage from "./pages/mustWatchPage";
import MovieReviewPage from "./pages/movieReviewPage";
import ActorPage from "./pages/actorDetailsPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import SiteHeader from "./components/siteHeader";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TopRatedPage from "./pages/topRatedPage";
import NowPlayingPage from "./pages/nowPlayingPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/movies/trending/today" element={<TrendingPage/>} />
          <Route path="/movies/top_rated" element={<TopRatedPage/>} />
          <Route path="/movies/must_watch" element={<MustWatchPage/>} />
          <Route path="/movies/now_playing" element={<NowPlayingPage/>} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/actors/:id" element={<ActorPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);