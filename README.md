## SKY Catalogue Application

# Description
This application is a single page implementation of an online catalogue system using the MEAN stack.
This application implements a single page todo list app using the MEAN stack.

The backend and front-end code is segregated into two directories:

`app` (contains backend files and dependencies)

`public` (contains front-end file and dependencies)

Express and Node are used to create an API around a MongoDB database. AngularJS communicates with this API via the services `(public -> services)`, which essentially feed the various application view controllers with data.

# Setup
**Prerequisites**

1. Node.js installed
2. NPM installed so that the project dependencies can be installed
3. MongoDB installed and able to be run from the command line

Node dependencies: please run `npm install` via terminal to allow node package manager to fetch and install its dependencies.

## Running the Application
1. Start up a MongoDB server with `mongo sky` in a terminal tab within the project root.
2. `node server.js` or `nodemon server.js` from within then project root directory.
3. The application can then be accessed via localhost: `http://localhost:8080`


## Note: Dummy data
Upon first run, the application pre-populates the DB with testing data.

Customers

 - {customerID:JS12345678, locationID:LONDON}
 - {customerID:RS12345678, locationID:LIVEPOOL}


## Application Flow
1. Once you're ready to use the application, you will be presented with 2 accessible views/routes, `home` and `productselection`.
2. Starting from the `home` view, select a user from the collection view element, (this mimics a successful authentication and captures the user details in storage for the app to consume).
3. The app then routes you to the `productselection` view. From here the user is presented with the catalogue interface, and are only shown channels available to them based on the location of their home (exception of "SKY NEWS" & "SKY SPORTS NEWS"). The basket automatically updates upon selecting/deselecting a channel within a category.
4. Once confirmed, the `basket` & `customerID` are stored within storage and the user is routed to the confirmation view.
