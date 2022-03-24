const assert = require('assert')
import { PersonsService } from '../src/services/persons.service'
import { PersonsModel } from '../src/models/persons.model'
import { db } from '../src/memory-database'
import { after } from 'mocha'

beforeEach(async () => {
    await db({ test: true })
})

describe('Persons Model', async () => {
    it('Allows to create two persons with different emails', async () => {
        // Arrange
        // Act
        // Assert
    })

    it('Prevents creating a person that already exists on the Database', async () => {
        // Arrange
        const service = new PersonsService()
        const person = {
            name: "Pablo",
            email: "pablohgm@gmail.com",
            gender: "Male",
            type: "TypeOne"
        }

        // Act
        await service.create(person)
        const result = await service.create(person)

        console.log({ result })

        // Assert
        assert.match(result, /duplicate key error dup key/)
    })
})
