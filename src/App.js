import { Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage/HomePage.jsx";
import Movies from "./pages/MoviesPage/MoviesPage.jsx";
import MovieDetails from "./pages/MovieDetailsPage/MovieDetailsPage.jsx";
import Cast from "./pages/CastPage/CastPage.jsx";
import Reviews from "./pages/ReviewsPage/ReviewsPage.jsx";
import NotFound from "./pages/NotFoundPage/NotFoundPage.jsx";

import { Container } from "./components/Container/Container.styled.js";

import { Header, Nav, StyledLink, Main } from "./App.styled.js";

function App() {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </Nav>
        </Container>
      </Header>

      <Main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Main>
    </>
  );
}

export default App;
