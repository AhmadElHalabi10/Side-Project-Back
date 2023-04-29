import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors";

import userRoute from "./routes/userRoute.js";
import categoryRoute from "./routes/categoryRoute.js";

dotenv.config();

await connectDB();

const PORT = process.env.PORT || 5000;

const app = new express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running ...");
});

app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);

app.use("/api/user", userRoute);
app.use("/api/category", categoryRoute);
app.use("/api/product", productRoute);
