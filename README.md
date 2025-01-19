# **Ski Resort API** ⛷️❄️

REST API designed to manage a ski resort - <ins>**Node.js**</ins>, <ins>**Express.js**</ins> and <ins>**MongoDB**</ins> (via Mongoose).
Optimizes and helps manage equipment, customer data and rentals.

## Table of contents
* [Installation and Setup](#installation-and-setup)
* [API Endpoints](#api-endpoints-with-details-to-each-endpoint)
* [Security](#security)
* [Contact](#contact)
  
## Installation and Setup
### 1. Clone the Repository
- Download a full copy of the project to your local computer.
  
  [https://github.com/your-username/ski-resort-management.git](https://github.com/your-username/ski-resort-management.git)

### 2. Install libraries
- Install all required libraries for the project:
  ```
  npm install
  ```
### 3. Configure Environment Variables
- Create a `.env` file in the root directory with the following variables:
  ```
  DB_USER="<YOUR_MONGODB_USERNAME>"
  DB_PASSWORD="<YOUR_MONGODB_PASSWORD>"
  DB_NAME="<YOUR_DATABASE_NAME>"
  JWT_KEY="<YOUR_JWT_KEY>"
  ```
### 4. Run the server
- Start the server with this command:
  ```
  nodemon server.js
  ```
> [!NOTE]
> The API will run on http://localhost:3000 by default. You can change port number in `server.js` file.

## API Endpoints (with details to each endpoint)
* [Authentication](#registration-and-login)
    * [Registration](#post-userssignup)
    * [Login](#post-userslogin) 
* [Equipment](#equipment)
    * [Get all equipment](#get-equipment)
    * [Add new equipment](#post-equipment)
    * [Get specific equipment](#get-equipment:id)
    * [Update equipment](#put-equipment:id)
    * [Delete equipment](#delete-equipment:id)
* [Clients](#clients)
    * [Get all clients](#get-clients)
    * [Add new client](#post-clients)
    * [Get specific client](#get-clients:id)
    * [Update client](#put-clients:id)
    * [Delete client](#delete-clients:id)
* [Rentals](#rentals)
    * [Get all rentals](#get-rentals)
    * [Add new rent](#post-rentals)
    * [Get specific rent](#get-rentals:id)
    * [Update rent](#put-rentals:id)
    * [Delete rent](#delete-rentals:id)

### Registration and login
| Method | Endpoint         | Description                       |
|--------|------------------|-----------------------------------|
| POST   | /users/signup    | Register new user                 |
| POST   | /users/login     | Login to existing user            |

#### `POST /users/signup`
- Expected body (JSON)
  ```json
  {
    "email": "example@emial.com",
    "password": "123abc"
  }
  ```
- Expected response
  ```json
  {
    "message": "User successfully added"
  }
  ```
#### `POST /users/login`
- Expected body (JSON)
  ```json
  {
    "email": "example@email.com",
    "password": "123abc"
  }
  ```
- Expected response
  ```json
  {
    "message": "token"
  }
  ```
  
### Equipment
| Method | Endpoint         | Description                       |
|--------|------------------|-----------------------------------|
| GET    | /equipment       | Get all equipment                 |
| POST   | /equipment       | Add new equipment                 |
| GET    | /equipment/:id   | Get details of specific equipment |
| PUT    | /equipment/:id   | Update equipment details          |
| DELETE | /equipment/:id   | Delete equipment                  |

#### `GET /equipment`

  - Expected response
  ```json
  {
    "message": "List of all equipment:",
    "list": [
        {
            "_id": "equipment_1_id",
            "name": "equipment_1_name",
            "type": "type",
            "size": "size",
            "status": "status",
            "pricePerDay": price_per_day
        },
        {
            "_id": "equipment_2_id",
            "name": "equipment_2_name",
            "type": "type",
            "size": "size",
            "status": "stuts",
            "pricePerDay": price_per_day
        }
    ]
}
```
#### `POST /equipment`
  - Expected body (JSON)
  ```json
  {
    "name": "equipment_name",
    "type": "type",
    "size": "size",
    "status": "stauts",
    "pricePerDay": "price_per_day"
  }
  ```
- Expected response
  ```json
  {
    "message": "Successfully added new equipment!"
  }
  ```
  #### `GET /equipment/:id`
  - Expected body (JSON)
  ```json
  {
    "message": "Details of equipment number <id>",
    "data": {
        "_id": "id",
        "name": "equipment_name",
        "type": "type",
        "status": "status",
        "pricePerDay": price_per_day
    }
  }
  ```
  #### `PUT /equipment/:id`
  - Expected body (JSON)
  ```json
  {
    
  }
  ```
- Expected response
  ```json
  {
    
    
  }
  ```
  #### `DELETE /equipment/:id`
  - Expected body (JSON)
  ```json
  {
    
  }
  ```
- Expected response
  ```json
  {
    
    
  }
  ```
### Clients
| Method | Endpoint       | Description                    |
|--------|----------------|--------------------------------|
| GET    | /clients       | Get all clients                |
| POST   | /clients       | Add new client                 |
| GET    | /clients/:id   | Get details of chosen client   |
| PUT    | /clients/:id   | Update client details          |
| DELETE | /clients/:id   | Delete client                  |

### Rentals
| Method | Endpoint       | Description                    |
|--------|----------------|--------------------------------|
| GET    | /rentals       | Get all rentals                |
| POST   | /rentals       | Add new rent                   |
| GET    | /rentals/:id   | Get details of specific rent   |
| PUT    | /rentals/:id   | Update rent details            |
| DELETE | /rentals/:id   | Delete rent                    |
