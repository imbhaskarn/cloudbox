import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/db";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  
  return res.status(200).json({});
};
export default handler;
