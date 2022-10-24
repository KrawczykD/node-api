import { Connection, Model } from "mongoose";
import IVan from "../../DatabaseModels/Van/IVan";
import IVanRepository from "../VanRepository/IVanRepository";

export default class userRepository implements IVanRepository {
    constructor(
        public readonly van : Model<IVan>
    ){}
    getVanByRegistrationNumber(registrationNumber: String) {
        return this.van.find({registrationNumber:registrationNumber});
    }
    getAllVans() {
        return this.van.find();
    }

    saveVan(newVan: IVan){

        const newCreatedVan = new this.van<IVan>({
            registrationNumber: newVan.registrationNumber,
            motDueDate: newVan.motDueDate,
            createAt: newVan.createAt,
            isActive: newVan.isActive,
            driverId: newVan.driverId
        })

        return newCreatedVan.save()
    }
}