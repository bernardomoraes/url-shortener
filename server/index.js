const express = require('express');
const app = express();
const routes = require('./presentation');
const UrlShortnerUseCase = require('../server/domain/shortner/urlShortnerUseCase')
const ExpressRouterAdapter = require('../server/presentation/adapters/expressRouterAdapter');
const UrlRedirectorUseCase = require('./domain/shortner/urlRedirectorUseCase');

// Use Cases (Use Cases are the only thing that should be exposed to the outside world)
const urlShortnerUseCase = new UrlShortnerUseCase()
const urlRedirectorUseCase = new UrlRedirectorUseCase()

// Dependency Injection
const urlShortnerRouter = new routes.urlShortner(urlShortnerUseCase)
const urlRedirectorRouter = new routes.urlRedirector(urlRedirectorUseCase)

app.use(express.json())
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})

// Adapter pattern to match with SOLID architecture
app.post('/shortner', ExpressRouterAdapter.adapt(urlShortnerRouter))
app.get('/:slug', ExpressRouterAdapter.adapt(urlRedirectorRouter))
