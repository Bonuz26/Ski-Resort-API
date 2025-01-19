# **Ski Resort API** ⛷️❄️

REST API designed to manage a ski resort - <ins>**Node.js**</ins>, <ins>**Express.js**</ins> and <ins>**MongoDB**</ins> (via Mongoose).
Optimizes and helps manage equipment, customer data and rentals.

## Table of contents
* [Installation and Setup](#installation-and-setup)
* [API Endpoints](#api-endpoints)
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
    * [Registration](#post-/users/signup)
    * [Login](#login) 
* [Equipment](#equipment)
    * [Get all equipment](#get-/equipment)
    * [Add new equipment](#post-/equipment)
    * [Get specific equipment](#get-/equipment/:id)
    * [Update equipment](#put-/equipment/:id)
    * [Delete equipment](#delete-/equipment/:id)
* [Clients](#clients)
    * [Get all clients](#get-/clients)
    * [Add new client](#post-/clients)
    * [Get specific client](#get-/clients/:id)
    * [Update client](#put-/clients/:id)
    * [Delete client](#delete-/clients/:id)
* [Rentals](#rentals)
    * [Get all rentals](#get-/rentals)
    * [Add new rent](#post-/rentals)
    * [Get specific rent](#get-/rentals/:id)
    * [Update rent](#put-/rentals/:id)
    * [Delete rent](#delete-/rentals/:id)

### Registration and login
| Method | Endpoint         | Description                       |
|--------|------------------|-----------------------------------|
| POST   | /users/signup    | Register new user                 |
| POST   | /users/login     | Login to existing user            |

#### `POST /users/signup`


### Equipment
| Method | Endpoint         | Description                       |
|--------|------------------|-----------------------------------|
| GET    | /equipment       | Get all equipment                 |
| POST   | /equipment       | Add new equipment                 |
| GET    | /equipment/:id   | Get details of specific equipment |
| PUT    | /equipment/:id   | Update equipment details          |
| DELETE | /equipment/:id   | Delete equipment                  |

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
