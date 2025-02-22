import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import morgan from "morgan";

// routes
import logRoutes from "./routes/logs.js";
import loginRoute from "./routes/login.js";
import logoutRoute from "./routes/logout.js";
import masterRoute from "./routes/master.js";
import propertyRoute from "./routes/property.js";
import wasteCollectionRoute from "./routes/wasteCollection.js";
import userRoute from "./routes/user.js";
import attendanceRoute from "./routes/attendance.js";

const app = express();
// env variables
const host = process.env.API_HOST || 3003;
const port = process.env.API_PORT || 3003;

// for api input in body (json)
app.use(express.json({ limit: "25mb" }));
// for api input in form-date
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// for whitelisting
app.use(
  cors({
    origin: "*",
    methods: "*",
    credentials: true,
  })
);

// morgan for scrutiny on api requests
const morganFormat = process.env.NODE_ENV === "development"? "dev" : "common";
app.use(morgan(morganFormat));

// Routes
app.use("/api/", logRoutes);
app.use("/api/auth", loginRoute);
app.use("/api/auth", logoutRoute);
app.use("/api/master", masterRoute);
app.use("/api/property", propertyRoute);
app.use("/api/wasteCollection", wasteCollectionRoute);
app.use("/api/user", userRoute);
app.use("/api/attendance", attendanceRoute);

// test route
app.use("/test", (req, res) => {
  res.send("api running...");
});


// starting server log
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`API log is available at ${host}/api/logs?file=debug.log`);
  console.log(`API log is available at ${host}/api/logs?file=error.log`);
});
