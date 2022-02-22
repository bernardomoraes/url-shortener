# URL Redirector

> ## Data
* None

> ## Primary Flux
1. Receive a request in a GET method
2. Retrieve the original URL from the shortened URL
3. Redirect to the original URL

> ## Exeption Flux: Request URL is not registered
1. Return error with status 404 (Not found)