const express = require("express");
const connectDb = require("./config/db");
const app = express();
//init midleware
app.use(express.json({ extended: false }));
//Connect Db
connectDb();
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to Cattle care" });
});
// app routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
