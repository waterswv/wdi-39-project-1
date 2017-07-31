# wdi-39-project-1
# Find a Pool (working title)

# Concept

### If you're an avid swimmer, finding a pool that is open and accessible when you're free to swim can be a challenge. Unfortunately for swimmers, going to a pool isn't like going to most other places- you can't simply show up during general open hours and expect that you'll be able to swim. There could easily be a swim team practice taking over the whole pool. It might be family swim, and the pool is full of screaming kids, and there's nowhere to easily swim laps. Or it could be closed for maintenance. You need to be able to check ahead of time and see what is going on.

### Our app aims to solve this problem by providing a one-stop resource for info on all the pool in your region, whether public or private. The site visitor can see general open hours as well as granular detail of the schedule. The site admin can add and delete pools, and add and delete scheduled events at those pools.

### It's also often the case that the pool you regularly swim at might not be conveniently located for where you you happen to be. You might not be aware of what pools are in your neighborhood, especially if you're visiting from out of town. Our app provides a map for each pool. In future versions, we plan to add a location based functionality that will list pools according to proximity.


---

#### Technology Leveraged
* javascript
* [Node.js] (https://nodejs.org/en/)
* [MongoDB] (http://mongodb.github.io/node-mongodb-native/2.0/)
* [Google Maps API for Node] (https://github.com/moshen/node-googlemaps/blob/master/README.md)

#### Technology Overview

Our App is built with a RESTful architecture utilizing Node.js and MongoDB to store data. We implemented a model-controller framework with mongoose and several node-modules, including [express](https://expressjs.com/) & [body-parser](https://github.com/expressjs/body-parser). Our google maps api integration utilizes a node-module that allows us to use geoencoding to translate an address into Lat/Long coordinates on the server and then pass a map object to the client-browser via ajax. For more info on the GoogleMapsAPI node-module vist the repo [here](https://github.com/moshen/node-googlemaps/blob/master/README.md)).

### Contributors list

[![waterswv](https://avatars0.githubusercontent.com/u/8486789?v=4&s=460)](https://github.com/waterswv)
[![sonoilconte](https://avatars1.githubusercontent.com/u/29389347?v=4&s=460)(https://github.com/sonoilconte)]
