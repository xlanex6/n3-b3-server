export default defineEventHandler((event) => { 

  const { count } = getQuery(event)

  const countAsNumber = parseInt(count) || 1
  const posts = []

  for (let i = 0; i < countAsNumber; i++) {
    posts.push(
      {
        id: $faker.string.uuid(),
        title: $faker.lorem.sentence(),
        content: $faker.lorem.paragraph(),
        published: $faker.date.past(),
        rating: $faker.number.int({ min: 1, max: 5 }),
        category: $faker.music.genre(),
      }
    )
  }

  return { limit: countAsNumber, posts }

});
