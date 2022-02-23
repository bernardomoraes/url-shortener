const express = require('express');
const app = express();
const routes = require('./presentation');
const ExpressRouterAdapter = require('../server/presentation/adapters/expressRouterAdapter');
const ShortenerUseCases = require('../server/domain/shortener')

// Dependency Injection, injecting the use cases
const urlShortenerRouter = new routes.urlShortener(ShortenerUseCases.urlShortener)
const urlRedirectorRouter = new routes.urlRedirector(ShortenerUseCases.urlRedirector)

app.use(express.json())


app.listen(3000, () => {
  console.log('App listening on port 3000!');
})

// Adapter pattern to match with Liskov Substitution Principle
app.post('/api/shortener', ExpressRouterAdapter.adapt(urlShortenerRouter))
app.get('/:slug', ExpressRouterAdapter.adapt(urlRedirectorRouter))
