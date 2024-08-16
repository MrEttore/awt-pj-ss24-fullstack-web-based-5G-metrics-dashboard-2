# 5G Metrics Dashboard - Backend

## Overview

This is the backend for the 5G Metrics Dashboard, responsible for processing and storing 5G metrics. It provides an API for managing messages that contain metric data.

## Installation

This Readme contains instructions to setup and run the backend as a standalone process.

- Navigate to the backend directory:
```
cd backend
```

### Without Docker

1. Ensure Node.js is installed on your system.
2. Navigate to the backend directory.
3. Install the dependencies with:
   ```bash
   npm install
   ```
4. Start the application with:
   ```bash
   npm start
   ```
   The application will run on port 3000 by default. You can change the port by setting the `PORT` environment variable:
   ```bash
   PORT=4000 npm start
   ```

### With Docker

1. Ensure Docker is installed on your system.
2. Navigate to the backend directory.
3. Build the Docker image using the Dockerfile in the backend directory:
   ```bash
   docker build -t backend .
   ```
4. Make sure a database.db exists in the current directory. In case, there is none:
   ```
   touch database.db
   ```
4. Run the Docker container and mount the database as a volume:
   ```bash
   docker run -p 3000:3000 -v ./database.db:/usr/src/app/database.db backend
   ```
   This starts the container and binds the SQLite database `database.db` from your current directory to the container's directory where the database is stored.

## Directory Structure

```
backend/
│
├── coverage/ # Coverage reports generated after running tests
│ └── index.html # HTML report file
│
├── node_modules/ # Node.js dependencies
│
├── src/ # Source code
│ ├── controller/ # Controllers for handling API requests
│ │ └── messages.controller.js
│ │
│ ├── model/ # Models for database interactions
│ │ └── messages.model.js
│ │
│ ├── routes/ # API routes
│ │ └── messages.routes.js
│ │
│ ├── server.js # Main entry point of the application
│
├── Dockerfile # Dockerfile for building Docker image
├── database.db # SQLite database file (mounted as volume)
├── package.json # Project metadata and dependencies
├── package-lock.json # Exact versions of dependencies
└── README.md # This README file
```

## Database Management

- **Mounting Database:** If you want to use an existing SQLite database, you can mount it when starting the Docker container as shown in the Docker run command above.
  
- **Testing Database:** To ensure that the application is working with the correct database, you can verify that new data is correctly saved and retrieved after starting the container. Use the provided API endpoints for this.

## API Documentation

The API documentation is annotated with Swagger and describes all the endpoints available for accessing and managing metrics. To view the documentation, start the application and navigate to `/api/docs`.

## Testing

- **Automated Tests:** To run automated tests for the backend, use the following command:
  ```bash
  npm test
  ```

- **Coverage Reports:** After running tests, coverage reports are generated and can be found under `backend/coverage`. To view these reports, navigate to the `coverage` directory and open the `index.html` file in a web browser.

- **Manual Testing:** You can manually test the API using tools like Postman or cURL to ensure all endpoints are working as expected.

## Configuration

- **Ports and Environment Variables:** You can adjust the port and other environment variables in the Docker container or in your local environment. For example:
  ```bash
  docker run -e PORT=4000 -p 4000:4000 -v ./database.db:/usr/src/app/database.db backend
  ```
  This starts the container on port 4000.

---
