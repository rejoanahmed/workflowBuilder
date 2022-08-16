import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../src/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { eventId } = req.query;
  eventId as string;
  const conditions = await prisma.conditions.findMany({
    where: {
      validEvents: {
        some: {
          id: {
            equals: eventId as string,
          },
        },
      },
    },
  });
  res.status(200).json(conditions);
}
