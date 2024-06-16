const app = require('./config/app.config');
const PORT = process.env.PORT || 3000;

/* entry point */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
