const express = require("express");
const authRouter = require("./routes/user.route.js");
const productRouters = require("./routes/product-route.js");
const categoryRouters = require("./routes/category-routes.js");
// const adminRouter = require("./routes/admin-routes.js");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", authRouter);
app.use("/api/v1", productRouters);
app.use("/api/v1", categoryRouters);

// let define the admin route
// app.use("/api/v1/admin", adminRouter)

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Hassan Nadeem application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgBlue.white);
});
