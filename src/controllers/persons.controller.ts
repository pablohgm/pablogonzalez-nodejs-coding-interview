import { JsonController, Get, Post, Body, Delete, Param } from 'routing-controllers'
import { PersonsService } from '../services/persons.service'

const personsService = new PersonsService()

@JsonController('/persons', { transformResponse: false })
export class PersonsController {
    @Get()
    async getAll() {
        const data = await personsService.getAll()
        return {
            status: 200,
            data,
        }
    }

    @Post('', { transformResponse: false })
    async create(@Body() p: any) {
        await personsService.create(p)
        return {
            status: 201,
        }
    }

    @Delete('/:id', { transformResponse: false })
    async remove(@Param('id') id: string) {
        await personsService.remove(id)
        return {
            status: 204,
        }
    }
}
