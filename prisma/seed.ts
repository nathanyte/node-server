import { prisma } from '../src/lib/prisma';

async function seed() {
  await prisma.event.create({
    data: {
      id: '22f2b567-b5c8-47e6-9131-be68e8c754bb',
      title: 'Evento teste de Seed',
      slug: 'evento-teste-de-seed',
      details: 'Teste a Seed com o BD populado lindamente por mim.',
      maximumAttendees: 102,
    }
  })
}

seed().then(() => {
  console.log('Database seeded >.<')
  prisma.$disconnect()
})