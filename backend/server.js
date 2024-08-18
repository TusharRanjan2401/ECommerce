const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoute");
const cors = require("cors");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes.js");

dotenv.config();

const PORT = process.env.PORT;

//Connect to mongoDB
connectDB();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/products", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
