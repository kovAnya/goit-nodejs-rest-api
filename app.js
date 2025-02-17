const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const path = require("path");
const configPath = path.join(__dirname, "config", ".env");
require("dotenv").config({ path: configPath });

const { contactsRouter, usersRouter } = require("./routes/api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  res.status(statusCode).json({ message: err.message });
});

module.exports = app;
