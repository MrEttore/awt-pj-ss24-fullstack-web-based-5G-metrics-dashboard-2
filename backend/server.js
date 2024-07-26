const app = require('./config/messages.config');
const PORT = process.env.PORT || 3000;

const messagesModel = require('./model/messages.model');

/* entry point */
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await messagesModel.init();
});
