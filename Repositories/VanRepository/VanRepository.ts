import IVan from "../../DatabaseModels/Van/IVan";
import Van from '../../DatabaseModels/Van/Van';
import IVanRepository from "../VanRepository/IVanRepository";

export default class userRepository implements IVanRepository {

    getVanByRegistrationNumber(registrationNumber: String) {
        return Van.find({registrationNumber:registrationNumber});
    }
    getAllVans() {
        return Van.find();
    }

    saveVan(newVan: IVan){

        const newCreatedVan = new Van<IVan>({
            registrationNumber: newVan.registrationNumber,
            motDueDate: newVan.motDueDate,
            createAt: newVan.createAt,
            isActive: newVan.isActive,
            driverId: newVan.driverId
        })

        return newCreatedVan.save()
    }
}