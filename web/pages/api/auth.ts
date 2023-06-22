import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/db";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {name, email, password} = req.body
  return res.status(200).json({name, email, password});
};
export default handler;