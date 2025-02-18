import express from "express";
import dotenv from "dotenv";
dotenv.config();
import verifyToken from "./middleware/authMiddleware.js";
import loginRoutes from "./routes/login.js";
import logoutRoutes from "./routes/logout.js";
import cors from "cors";
import morgan from "morgan";
import logRoutes from "./routes/logs.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "*",
    credentials: true,
  })
);

// api status information
app.use(morgan("dev"));

//public Route
app.use("/api/", logRoutes);
app.use("/api/auth/", loginRoutes);

//private Route
app.use("/api/auth/", verifyToken, logoutRoutes);

// test route
app.use("/test", (req, res) => {
  res.send("api running...");
});

setupSwagger(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Swagger UI is available at http://localhost:${port}/api-docs`);
  console.log(`API log is available at http://localhost:${port}/api/logs?file=debug.log`);
  console.log(`API log is available at http://localhost:${port}/api/logs?file=error.log`);
});
