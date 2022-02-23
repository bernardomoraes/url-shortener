const express = require('express');
const app = express();
const routes = require('./presentation');
const ExpressRouterAdapter = require('../server/presentation/adapters/expressRouterAdapter');
const shortnerUseCases = require('../server/domain/shortner')

// Dependency Injection, injecting the use cases
const urlShortnerRouter = new routes.urlShortner(shortnerUseCases.urlShortner)
const urlRedirectorRouter = new routes.urlRedirector(shortnerUseCases.urlRedirector)

app.use(express.json())


app.listen(3000, () => {
  console.log('App listening on port 3000!');
})

// Adapter pattern to match with Liskov Substitution Principle
app.post('/shortner', ExpressRouterAdapter.adapt(urlShortnerRouter))
app.get('/:slug', ExpressRouterAdapter.adapt(urlRedirectorRouter))
