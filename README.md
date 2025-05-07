
# Slot Management  API

This Project implements Role based Slot booking system with two Roles: **Admin** and **User**

In that Admin can view users' available slots date-wise and User can add their availability, including date, start time, and end time.




# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 20.15.1


# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm start
```

- Seed data
```
npm seed
```


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **app**                  | Contains  source code of APIs                   |
| **app/config**        | Application configuration including environment-specific configs 
| **app/controllers**      | Controllers define functions to serve various express routes.          
| **app/middlewares**      | Express middlewares which process the incoming requests before handling them down to the routes
| **app/routes**           | Contain all express routes, separated by module/area of application                       
| **app/models**           | Models define schemas that will be used in storing and retrieving data from Application database  |
| **server.js**         | Entry point to express app                                                               |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   | tsconfig.json            | Config settings for compiling source code only written in TypeScript    



## Endpoints


Below are the APIs related to Slot Management

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/api/slots?date={value}`                             | Retrieve Slots by Admin.                      |
| `POST`   | `/api/auth/login`                             | Login for User or Admin                       |                   |
| `POST`  | `/api/slots/book`                          | Book a Slot By Admin.                 |
| `POST`   | `api/availability`                 | For Add availability by User                 |

