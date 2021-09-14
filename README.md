# gymmie

## Who is gymmie? Why does he exist?
gymmie was built to provide an appointment/class booking platform for gyms and sport clubs. gymmie was born in the realms of a part-time full-stack webdevelopment bootcamp and is meant to demonstrate what I've learned the past 6 months. gymmie is the prototype of the app I'd like to develop for my brother, so he can upgrade the booking system at his tennis centre.

***Demo:*** https://zsokamontvai.dev (for now)

## What are you reading now?
Welcome to gymmie's frontend repo.  

## Main ingredients
You can see the full list of dependencies in the json.package but here is a list of the main ingredients:

* [**React**](https://reactjs.org/) for building the user interface
* [**Next.js**](https://nextjs.org/) for server side rendering and routing
* [**Styled Components**](https://styled-components.com/) for styling
* [**GraphQL**](https://graphql.org/) a query language for APIs and a runtime for fulfilling those queries with your existing data. It's a replacement for/addition to REST API
* [**Apollo Client**](https://www.apollographql.com/apollo-client) for data management; serves as a gateway between the backend and frontend. Enables communication with the GraphQL server; facilitates queries to fetch data and the use of mutations to create, update, delete and also helps caching GraphQL data. Apollo's React Hooks make this interaction possible.
* [**TypeScript**](https://www.typescriptlang.org/) a strongly typed programming language that builds on JavaScript giving you better tooling
* [**Ethereal**](https://ethereal.email/) for dummy emailing

If you are interesting in learning more about __gymmie's backend__, which database I used and what Keystone does etc, visit this repo: https://github.com/ZsokaM/gymmie-backend

## Installation and usage
```npm install```

Available scripts:
```
npm run dev
npm start
npm build
```

## Disclaimer
gymmie works great, however if I had to start again (which is planned), I'd use a different configuration, and would either upgrade to the latest version of Keystone and switch to PostGreSQL, or would try with a different CMS which pairs better with MongoDB. 

## Features for the future, what's next
In the next version of gymmie:
* I'll move all admin activities to the CMS and will only leave user interactions in the client side. 
* gymmie's config needs a bit of oiling (see disclaimer above). 
* gymmie is more or less responsive already but I'd love to expand on this and work on accessibility as well. 
* For the user account page, I'd like to give more control to the user (edit profile, delete profile).
* Integrating Stripe or PayPal for payment.
* Hooking up email service provider

## Acknowledgments
gymmie would like to thank Michael, Sam for their continous support. 

## Contact information
https://github.com/ZsokaM

