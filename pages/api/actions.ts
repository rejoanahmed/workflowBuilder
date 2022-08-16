import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../src/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const actions = await prisma.actions.findMany();
  res.status(200).json(actions);
}
