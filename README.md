# **Ski Resort API** ⛷️❄️
REST API designed to manage a ski resort - <ins>**Node.js**</ins>, <ins>**Express.js**</ins> and <ins>**MongoDB**</ins> (via Mongoose).
Optimizes and helps manage equipment, customer data and rentals.

## Installation and Setup
### 1. Clone the Repository:
- Download a full copy of the project to your local computer.
  [GitHub Pages](https://github.com/your-username/ski-resort-management.git)

### 2. Install libraries:
- Install all required libraries for the project.
  ```
  npm install
  ```
### 3. Configure Environment Variables:
- Create a `.env` file in the root directory with the following variables:
  ```
  DB_USER="<YOUR_MONGODB_USERNAME>"
  DB_PASSWORD="<YOUR_MONGODB_PASSWORD>"
  DB_NAME="<YOUR_DATABASE_NAME>"
  JWT_KEY="<YOUR_JWT_KEY>"
  ```
### 4. Run the server:
-
  ```
  nodemon server.js
  ```
> [!NOTE]
> The API will run on http://localhost:3000 by default. You can change port number in `server.js` file.
## API Endpoints

### - Register and login
| Method | Endpoint         | Description                       |
|--------|------------------|-----------------------------------|
| POST   | /users/signup    | Register new user                 |
| POST   | /users/login     | Login to existing user            |

### - Equipment
| Method | Endpoint         | Description                       |
|--------|------------------|-----------------------------------|
| GET    | /equipment       | Get all equipment                 |
| POST   | /equipment       | Add new equipment                 |
| GET    | /equipment/:id   | Get details of specific equipment |
| PUT    | /equipment/:id   | Update equipment details          |
| DELETE | /equipment/:id   | Delete equipment                  |

### - Clients
| Method | Endpoint       | Description                    |
|--------|----------------|--------------------------------|
| GET    | /clients       | Get all clients                |
| POST   | /clients       | Add new client                 |
| GET    | /clients/:id   | Get details of chosen client   |
| PUT    | /clients/:id   | Update client details          |
| DELETE | /clients/:id   | Delete client                  |

### - Rentals
| Method | Endpoint       | Description                    |
|--------|----------------|--------------------------------|
| GET    | /rentals       | Get all rentals                |
| POST   | /rentals       | Add new rent                   |
| GET    | /rentals/:id   | Get details of specific rent   |
| PUT    | /rentals/:id   | Update rent details            |
| DELETE | /rentals/:id   | Delete rent                    |
