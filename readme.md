# coding test phase 2

## Setup / installation instructions (on MAC)

- clone code on local mac
-
-
- postman

## Description of the solution

### Why used NodeJs in this project?

- JavaScript is everywhere!! 👍 Choosing the same language on front-end and also on backend can improve developer productivity 🔧
- Easy , simple yet powerfull and flexible. ✨
- Big corporates use Node.js such as in AWS , Netflix , UBER etc 👌
- Node.js has strong community which provides numerous libraries and reusable templates are available. 🙆‍♂️

### Project structure

- Used MVC architectural pattern which is most popular architectures for applications.
- Separate functions in controller , data and router folder and each have own functions.
- This is good coding practice for easy code maintenance which is easy to extend and grow.
- Async function used in controller and data files as if the project is getting data from database service.
- Error message handled in middleware for GET /orders/{id} and GET /orders/{type}/{date}
- Used validation library to validate input values in server side for POST

### Libraries used

- Express.js
- express-validator

### Why used Express.js?

- Express.js is the most popular node application framework . This means that it has been tested by many developers and most likely common issues have been resolved.
- not all libraries are good just because many developers are using it.But I still chose to use Express.js because Express.js is powerful , flexible and most importantly it is very light weighted library which is really easy to learn if you know javascript.

## List of assumptions for the endpoints

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

## Any thought on the test and how long it took to build ?

- Spend a few hours to learn Express.js framework to design and implement a simple service.
- After understand the concept of Express.js , developing logic part was fairly straight forward . 4-5hours to build the logic part.
- 3-4 hours to clean the code and researching for a better refactoring option to build simple code to read.

## What else to add more in the future?

- Develop front-end and
- implement database with mysql , mongodb etc and connect with the api
- more useful libraries can be added such as CORS, morgan , helmet etc
