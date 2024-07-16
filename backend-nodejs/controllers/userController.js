import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: { username, password: hashedPassword },
    });
    const { password, ...userPublic } = user;
    res.status(201).json(userPublic);
  } catch (error) {
    res.status(400).json({ error: "User already exists" });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id }, "your_jwt_secret", {
        expiresIn: "1h",
      });
      res.json({ token });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while logging in" });
  }
};

const deleteUser = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await prisma.user.delete({ where: { username } });
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
};

const getUserByUsername = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { username } });
    const { password, ...userPublic } = user;
    res.json(userPublic);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
};

export { registerUser, loginUser, deleteUser, getUserByUsername };
