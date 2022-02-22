# Url Shortner

> ## Data
* URL

> ## Primary flux
1. Receive a Request with an URL
2. Validate the given URL
3. Shorten the URL using the most optimal algorithm
4. Makes the shortened URL valid
5. Store in database the shortened URL and the original URL
6. Return the shortened URL

> ## Secondary flux (Parallel to the primary flux)
1. Receive a URL
2. Retrieve page title
3. Store the page title in the database with the shortened URL

> ## Exeption Flux: Given URL is not valid
1. Return error with status 400 (Bad request)