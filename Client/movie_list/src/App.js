import React, { useEffect, useState } from 'react';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);

  const url = "http://localhost:8080/movies";

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error("Movie data not found");
        }

        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    }
    fetchMovies();
  }, []);

  console.log(movieData);
  return (
    <div className="App">
      <header className="App-header">
        <p>MOVIES:</p>
        <ul>
          {movieData?.map((movie) => (
            <li key={movie.id}>{movie}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}


export default App;
