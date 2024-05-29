# 5G Metrics Dashboard - Backend

## Installation

### Without Docker
1. Make sure Node.js is installed on your system.
2. Navigate to the backend directory.
3. Run `npm install` to install the dependencies.
4. Start the application with `npm start`.

### With Docker
1. Make sure Docker is installed on your system.
2. Navigate to the backend directory.
3. Build the Docker image using the Dockerfile located in the backend directory:
   ```
   docker build -t backend .
   ```
4. Run the Docker container:
   ```
   docker run -p 3000:3000 backend
   ```
