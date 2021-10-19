# coding test phase 2

## Setup / installation instructions (on MAC)

-
-
- postman

## Description of the solution

### Why used NodeJs?

- JavaScript is everywhere!! 👍 Choosing the same language on front-end and also on backend can improve developer productivity 🔧
- Easy , simple yet powerfull and flexible. ✨
- Big corporates use Node.js such as in AWS , Netflix , UBER etc 👌
- Node.js has strong community which provides numerous libraries and reusable templates are available. 🙆‍♂️

### Project structure

- Used MVC architectural pattern which is most popular architectures for applications.
- separate code in controller , data , router folder .
- each controller , data , router file has its own function. This is good coding practice to fix and maintain code in the future
- async function used in controller and data files as if the project is getting data from database service.
- error message handled in middleware for GET /orders/{id} and GET /orders/{type}/{date}
- Used validation library to validate input values in server side.

### Libraries used

- Express.js

### Why used Express.js?

- Express.js is the most popular node application framework . This means that it has been tested by many developers and more likely common issues have been resolved.
- not all libraries are good just because many developers are using.But I still chose to use Express.js because Express.js is powerful , flexible and most importantly it is very light weighted library which is really easy to learn if you know javascript.

### List of assumptions for each endpoint

#### POST http://localhost:8080/orders

- Order ID is created using Date.now().toString() in milliseconds //
- Latest order will be stored in last of the array.

#### GET http://localhost:8080/orders (extra endpoint)

- Get all the orders in the database.

#### GET http://localhost:8080/orders/{id}

- Get the detail of the order that is matching with given ID.

#### GET http://localhost:8080//orders/{type}/{date}

- related_customers field will show the list of customers who made orders for the given type and on the given day.
- count field will show the number of orders that is matching with the type and the date that is given.
- order field will show the list of the orders that is matching with the given values . It only shows last 10 orders(latest 10 orders).

### Any thought on the test and how long it took to build ?

- I spend a few hours to research on which language/tool set or library to use.
- Once I decided to use Node.js with Express.js framework . Developing logic part was fairly straight forward to me . It took around 4-5hours maximum.
- Spend a little bit more time on researching better refactoring options to build simple and clean code to read.

### What else to add more in the future?

- Develop front-end part and
- implement database with mysql , mongodb etc and connect with the api
-
