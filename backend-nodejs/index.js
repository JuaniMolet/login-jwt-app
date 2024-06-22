import express from "express";

const app = express();

const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/login", (req, res) => {
  res.json({ user: "John Doe" });
});

app.post("/register", (req, res) => {
  res.send("Register");
});

app.post("/forgot-password", (req, res) => {
  res.send("Forgot Password");
});

app.post("/reset-password", (req, res) => {
  res.send("Reset Password");
});

app.post("/change-password", (req, res) => {
  res.send("Change Password");
});

app.post("/logout", (req, res) => {
  res.send("Logout");
});

app.get("/protected", (req, res) => {
  res.send("Protected");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
