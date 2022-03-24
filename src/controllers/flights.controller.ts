import { JsonController, Get, Post, Body, Param } from 'routing-controllers'
import { FlightsService } from '../services/flights.service'

const flightsService = new FlightsService()

@JsonController('/flights')
export default class FlightsController {
    @Get('', { transformResponse: false })
    async getAll() {
        const data = await flightsService.getAll()

        return {
            status: 200,
            data
        }
    }

    @Post('/:id/passenger', { transformResponse: false })
    async addPassenger(@Param('id') id: string, @Body() body: any) {
        const data = await flightsService.addPassenger(id, body)

        return {
            status: 200,
            data
        }
    }
}
