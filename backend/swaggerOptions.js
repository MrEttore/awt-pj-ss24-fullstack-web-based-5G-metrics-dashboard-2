const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '5G Metrics API',
      version: '1.0.0',
      description: 'API documentation for 5G Metrics Management',
    },
    servers: [
      {
        url: 'http://localhost:80', // Update with your server's URL
      },
      {
        url: 'http://localhost:3000'
      }
    ],
  },
  apis: ['./routes/*.js'], // Path to the API docs (update with the correct path)
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
