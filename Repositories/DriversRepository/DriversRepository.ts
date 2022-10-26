import Driver from "../../DatabaseModels/Driver/Driver";
import IDriver from "../../DatabaseModels/Driver/IDriver";
import IUserRepository from "./IDriversRepository";

export default class userRepository implements IUserRepository {

    getDriverByName(name){
        return Driver.find({name:name});
    }

    getAllDrivers(){
        return Driver.find();
    }

    saveDriver(newDriver: IDriver){

        const newCreatedDriver = new Driver<IDriver>({   
            name:newDriver.name,
            imgPath: newDriver.imgPath,
            createAt: newDriver.createAt,
            isActive: newDriver.isActive,
            email: newDriver.email
          })

        return newCreatedDriver.save()
    }
}