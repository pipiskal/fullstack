require("dotenv").config();
const app = require("./src/app");

const PORT = 4321;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
