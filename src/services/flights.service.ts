import { FlightsModel } from '../models/flights.model'

export class FlightsService {
    getAll() {
        return FlightsModel.find()
    }

    async addPassenger(id: string, body: any) {
        const fly = await FlightsModel.findOne({ _id: id })

        fly.passengers.push({ ...body })

        await fly.save()
    }
}
