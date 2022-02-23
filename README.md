# URL Shortener
This project aims to shorten a URL as much as possible and also make available the 100 most used urls.
## Core Requirements
- [x] Post endpoint that receives as a body param the URL to shorten and it returns as part of the response an URL with the shortest possible length.

- [x] Endpoint to get redirected to the original URL from the shortened URL.

- [x] Crawl the URL that is shortened, pull the title from the website, and store it.

- [ ] GET endpoint that returns the top 100 URLs most frequently accessed, including the title crawled from step 2


## Deliverables
- [x] Github public repository with the core requirements implemented
- [ ] Deploy to AWS

## How to Run and Use
- Install dependencies with `npm install`
- Configure .env file with your credentials follow the .env.example file
- Run the server with `npm start`
- Make your first request to the endpoint `/api/shortener` with a valid URL to shorten
- The response will be a shortened URL with the shortened version of the URL
- Make a request to the shortened URL to get redirected to the original URL

## Final Considerations

- As the api is simple, I decided to show some good practices and implement a consolidated architecture (REST API with Clean Architecture). 
- Separate the logic from the presentation and infra layer.
- Use SOLID principles to implement the best practices of clean code and architecture.
- Create use cases using dependency injection to garante the best practice of testability.
- I decided to use the [Express](https://expressjs.com/) framework to implement the API.
- Use the Adapter pattern to implement the logic of the API.
- Build a database with MongoDB and use the [Mongoose](https://mongoosejs.com/) library to interact with it.
- Build a documentation of the Uses Cases.
- Create a test suite with Jest.
- Build a CI pipeline with GitHub Actions.

## Future Improvements

- [ ] Use the Serverless Framework to deploy the API to AWS.
- [ ] Improve test coverage.
- [ ] Delivery top 100 URLs endpoint.
- [ ] Improve the documentation.
