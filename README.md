# Travolta - Online Travel Agency Demo (Web Service)
A [Node.js](https://nodejs.org/) web service acting as a backend for the [Travolta](https://github.com/giladpomer/travolta-client) web app.

## Try it now!
> Please note that the web service sleeps when it's not frequently called. Calling an endpoint will start the service (this can take around 40 seconds for the first call)

The web service is available at https://travolta-server.onrender.com/

### Calling the service
There are currently 2 endpoints available:
+ GET `/destinations`
+ POST `/search`

## Continuous Integration (CI)
All [jest](https://jestjs.io/) unit tests will automatically run on every push to this GitHub repository before trying to deploy.

## Continuous Deployment (CD)
The repository is automatically deployed on every successful push (all tests passing) to this GitHub repository using [render](https://render.com/).

## External Packages
+ [Express.js](https://expressjs.com/)
+ [Jest](https://jestjs.io/)
+ [deep-equal](https://www.npmjs.com/package/deep-equal)
+ [cors](https://www.npmjs.com/package/cors)
