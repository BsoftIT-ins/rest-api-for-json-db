# rest-api-for-json-db
//https://markdownguide.org
# This is REST API with Express Server 
## Shop API 
### Product Category

**Work on Product API**

## First clone the repo and install package

```Console
$npm install 
```
## Server Structure 

```js
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
//Environment Variable 
dotenv.config();
const PORT = process.env.PORT || 8080;

// Express init
const app = express();

// Middleware init
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

// public folder static
app.use(express.static('public'));

//Server listen
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgGreen.bgCyan);
})
```
## Packages used

* Express.js
* Nodemon
* Dotenv
* Colors
* Multer
* Nodemailer

