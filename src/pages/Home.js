import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies]=useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/movies')
    .then(res=>res.json())
    .then(data=>{setMovies(data)})
  }, [])

  console.log(movies)
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Home page</h1>
        {movies.map(mov=>{
          return <MovieCard mov={mov} key={mov.title}/>
        })}
      </main>
    </>
  );
};

export default Home;
