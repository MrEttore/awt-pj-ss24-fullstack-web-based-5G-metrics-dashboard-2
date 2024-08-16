const { app, init } = require('./config/messages.config');
const PORT = process.env.PORT || 3000;

/* entry point */
app.listen(PORT, async () => {
  await init()
  console.log(`Server is running on port ${PORT}`);
});
