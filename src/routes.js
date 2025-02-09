import Directors from "./pages/Directors";
import Actors from './pages/Actors'
import Movie from './pages/Movie'
import ErrorPage from "./pages/ErrorPage";
import Home from './pages/Home'
const routes = [
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
  
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />
  }
];

export default routes;