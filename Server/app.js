const express = require('express');
const app = express();
const port = 8080;
const knex = require('knex')(require('./knexfile.js')["development"])
const cors = require('cors');

app.use(cors({ origin: '*' }));

app.get('/', (req, res) => res.send('I have an app up and running, finally!'))

app.get('/movies', (req, res) => {
  knex('movies')
    .select('*')
    .then(movie => {
      var movieTitles = movie.map(movie => movie.title)
      console.log('Sending response:', movieTitles);
      res.json(movieTitles);
    })
})

app.listen(port, () => console.log(`Movie server app listening at http://localhost:${port}`))