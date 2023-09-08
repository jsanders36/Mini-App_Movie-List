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
        <p>
          {movies.map((movie) => {
            return (
              movie.title + " "
            )
          })}
        </p>
      </header>
    </div>
  );
}

export default App;
