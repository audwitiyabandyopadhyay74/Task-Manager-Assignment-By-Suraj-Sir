import express from "express";
import dotenv from "dotenv";
import session from "express-session";

import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

const app = express();

// Global Middlewares
app.use(express.json());

app.use(
  session({
    genid: (res) => uuidv4(),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 1000 * 60 * 24 * 7 }, // 10 min
  })
);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello");
  console.log(req.session.user);
});
app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port no http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });
