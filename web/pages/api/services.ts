import { NextApiRequest, NextApiResponse } from "next";
import client from "@/db";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    
  return res.status(200).json({});
}
