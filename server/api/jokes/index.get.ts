export default defineEventHandler((event) => { 

  const { count } = getQuery(event)

  const countAsNumber = parseInt(count) || 1
  const jokes = []

  for (let i = 0; i < countAsNumber; i++) {
    jokes.push(
      {
        id: $faker.string.uuid(),
        joke: $faker.hacker.phrase()
      }
    )
  }

  return { limit: countAsNumber, jokes }

});
