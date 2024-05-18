import express from "express";
import dotenv from "dotenv";

const PORT = process.env.PORT || 5000;

const app = express();

app.use("api/contacts", require("./routes/contactRoutes")); //Middlewares

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
