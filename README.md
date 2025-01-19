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
    * [Get specific equipment](#get-equipmentid)
    * [Update equipment](#put-equipmentid)
    * [Delete equipment](#delete-equipmentid)
* [Clients](#clients)
    * [Get all clients](#get-clients)
    * [Add new client](#post-clients)
    * [Get specific client](#get-clientsid)
    * [Update client](#put-clientsid)
    * [Delete client](#delete-clientsid)
* [Rentals](#rentals)
    * [Get all rentals](#get-rentals)
    * [Add new rent](#post-rentals)
    * [Get specific rent](#get-rentalsid)
    * [Update rent](#put-rentalsid)
    * [Delete rent](#delete-rentalsid)

### Registration and login
| Method | Endpoint         | Description                       |
|--------|------------------|-----------------------------------|
| POST   | /users/signup    | Register new user                 |
| POST   | /users/login     | Login to existing user            |

#### `POST /users/signup`
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

> [!IMPORTANT]
> You need to set your token in authorization: Bearer token.

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
            "pricePerDay": "price_per_day"
        },
        {
            "_id": "equipment_2_id",
            "name": "equipment_2_name",
            "type": "type",
            "size": "size",
            "status": "stuts",
            "pricePerDay": "price_per_day"
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
    "message": "Successfully added new equipment!",
    "data": {
        "_id": "id",
        "name": "equipment_name",
        "type": "type",
        "status": "status",
        "pricePerDay": "price_per_day"
    }
  }
  ```
#### `GET /equipment/:id`
- Expected response
  ```json
  {
    "message": "Details of equipment number <id>",
    "data": {
        "_id": "id",
        "name": "equipment_name",
        "type": "type",
        "status": "status",
        "pricePerDay": "price_per_day"
    }
  }
  ```
#### `PUT /equipment/:id`
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
    "message": "Successfully saved changes for equipment number <id>"
  }
  ```
#### `DELETE /equipment/:id`
- Expected response
  ```json
  {
    "message": "Removed equipment number <id>"
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

> [!IMPORTANT]
> You need to set your token in authorization: Bearer token.

#### `GET /clients`

- Expected response
  ```json
  {
    "message": "List of all clients:",
    "list": [
        {
          "_id": "client_1_id",
          "firstName": "first_name_1",
          "lastName": "last_name_1",
          "phoneNumber": "phone_number_1",
          "address": "address",
          "email": "email_1"
        },
        {
          "_id": "client_2_id",
          "firstName": "first_name_2",
          "lastName": "last_name_2",
          "phoneNumber": "phone_number_2",
          "address": "address",
          "email": "email_2"
        }
    ]
  }
  ```
#### `POST /clients`
- Expected body (JSON)
  ```json
  {
    "firstName": "first_name",
    "lastName": "last_name",
    "phoneNumber": "phone_number",
    "address": "address",
    "email": "email"
  }
  ```
- Expected response
  ```json
  {
    "message": "Successfully added new client!",
    "data": {
        "_id": "id",
        "firstName": "first_name",
        "lastName": "last_name",
        "phoneNumber": "phone_number",
        "address": "address",
        "email": "email"
    }
  }
  ```
#### `GET /clients/:id`
- Expected response
  ```json
  {
    "message": "Detalis about client number <id>",
    "data": {
        "_id": "id",
        "firstName": "first_name",
        "lastName": "last_name",
        "phoneNumber": "phone_number",
        "address": "address",
        "email": "email"
    }
  }
  ```
#### `PUT /clients/:id`
- Expected body (JSON)
  ```json
  {
    "firstName": "first_name",
    "lastName": "last_name",
    "phoneNumber": "phone_number",
    "address": "address",
    "email": "email"
  }
  ```
- Expected response
  ```json
  {
    "message": "Successfully saved changes for client number <id>"
  }
  ```
#### `DELETE /clients/:id`
- Expected response
  ```json
  {
    "message": "Removed client number <id>"
  }
  ```
### Rentals
| Method | Endpoint       | Description                    |
|--------|----------------|--------------------------------|
| GET    | /rentals       | Get all rentals                |
| POST   | /rentals       | Add new rent                   |
| GET    | /rentals/:id   | Get details of specific rent   |
| PUT    | /rentals/:id   | Update rent details            |
| DELETE | /rentals/:id   | Delete rent                    |

> [!IMPORTANT]
> You need to set your token in authorization: Bearer token.

#### `GET /rentals`

- Expected response
  ```json
  {
    "message": "List of all existing rentals:",
    "list": [
        {
            "_id": "rent_1_id",
            "equipmentId": {
                "_id": "id",
                "name": "equipment_name",
                "pricePerDay": "price_per_day"
            },
            "clientId": {
                "_id": "id",
                "lastName": "last_name"
            },
            "startDay": "start_day",
            "endDay": "end_day",
            "status": "status"
        },
        {
            "_id": "rent_2_id",
            "equipmentId": {
                "_id": "id",
                "name": "equipment_name",
                "pricePerDay": "price_per_day"
            },
            "clientId": {
                "_id": "id",
                "lastName": "last_name"
            },
            "startDay": "start_day",
            "endDay": "end_day",
            "status": "status"
        },
    ]
  }
  ```
#### `POST /rentals`
- Expected body (JSON)
  ```json
  {
    "equipmentId": "equipment_id",
    "clientId": "client_id",
    "startDay": "date",
    "endDay": "date",
    "status": "status"
  }
  ```
> [!NOTE]
> `startDay` and `endDay` must be in following format *YYYY-MM-DDT00:00:00.000Z*.
  
- Expected response
  ```json
  {
    "message": "Successfully added new rent!",
    "data": {
        "equipmentId": "equipment_id",
        "clientId": "client_id",
        "startDay": "date",
        "endDay": "date",
        "status": "status"
    }
  }
  ```
#### `GET /rentals/:id`
- Expected response
  ```json
  {
    "message": "Detalis about client number <id>",
    "data": {
        "_id": "id",
        "firstName": "first_name",
        "lastName": "last_name",
        "phoneNumber": "phone_number",
        "address": "address",
        "email": "email"
    }
  }
  ```
#### `PUT /rentals/:id`
- Expected body (JSON)
  ```json
  {
    "equipmentId": "equipment_id",
    "clientId": "client_id",
    "startDay": "date",
    "endDay": "date",
    "status": "status"
  }
  ```
- Expected response
  ```json
  {
    "message": "Successfully saved changes for rent number <id>"
  }
  ```
#### `DELETE /rentals/:id`
- Expected response
  ```json
  {
    "message": "Removed rent number <id>"
  }
  ```
