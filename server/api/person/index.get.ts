export default defineEventHandler((event) => { 

  const { count } = getQuery(event)

  const countAsNumber = parseInt(count) || 1
  const persons = []

  for (let i = 0; i < countAsNumber; i++) {
    persons.push(
      {
        name: $faker.person.fullName(),
        gender: $faker.person.gender(),
        job: $faker.person.jobTitle(),
        email: $faker.internet.email(),
        phone: $faker.phone.number(),
        zodiac: $faker.person.zodiacSign(),
      }
    )
  }

  return { countAsNumber, persons }

});
