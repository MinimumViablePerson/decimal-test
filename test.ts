import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function doStuff () {
  await prisma.rating.create({ data: { score: Math.random() } })

  const ratings = await prisma.rating.findMany()
  console.log(ratings)
}

doStuff()
