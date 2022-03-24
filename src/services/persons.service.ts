import { PersonsModel } from '../models/persons.model'

export class PersonsService {
    getAll() {
        return PersonsModel.find()
    }

    async create(person: any) {
        try {
            await PersonsModel.create(person)
        } catch (error) {
            return error.message
        }
    }

    async remove(id: string) {
        try {
            await PersonsModel.remove({ _id: id });
        } catch (error) {
            return error.message
        }
    }
}
