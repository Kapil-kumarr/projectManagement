import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./db/database.js";
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Mongo DB connection failed, Error: ", error);
    process.exit(1);
  });
