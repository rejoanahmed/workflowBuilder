import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../src/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const events = await prisma.events.findMany();
  res.status(200).json(events);
}
