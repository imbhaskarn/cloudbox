import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/db";
import jwt from "jsonwebtoken";

//Env Types

declare namespace NodeJS {
  interface ProcessEnv {
    JWT_SECRET: string;
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  // Here, you can perform your own authentication logic,
  // such as checking the username and password against a database.

  // For demonstration purposes, we'll use a hardcoded username and password.
  const validEmail = "admin@mail.com";
  const validPassword = "Password@123";

  // Compare the provided username and password with the valid ones.
  const isValidCredentials = validEmail === email && validPassword === password;

  if (!isValidCredentials) {
    res.status(401).json({ message: "Invalid username or password" });
    return;
  }

  // If the credentials are valid, generate a JWT token.
  const accessToken = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return res.status(200).json({ result: "success",  accessToken } );
};
export default handler;
