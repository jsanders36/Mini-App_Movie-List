import './App.css';

function App() {
  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];
  return (
    <div className="App">
      <header className="App-header">
        MOVIES:
        <p>
          {movies.map((movie) => {
            return (
              <ul>
                <li>{movie.title}</li>
              </ul>
            )
          })}
        </p>
      </header>
    </div>
  );
}

export default App;
