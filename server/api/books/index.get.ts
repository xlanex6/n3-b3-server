export default defineEventHandler((event) => { 

  const { count } = getQuery(event)

  const countAsNumber = parseInt(count) || 1
  const books = []

  for (let i = 0; i < countAsNumber; i++) {
    books.push(
      {
        id: $faker.string.uuid(),
        title: $faker.lorem.sentence(),
        body: $faker.lorem.paragraph(),
        price: $faker.number.float({ min: 10, max: 30 }),
        category: $faker.commerce.department(),
        rating: $faker.number.int({ min: 1, max: 5 }),
        published: $faker.date.past(),
        author: $faker.person.fullName(),
      }
    )
  }

  return { limit: countAsNumber, books }

});
