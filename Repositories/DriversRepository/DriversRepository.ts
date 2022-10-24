import { Connection, Model } from "mongoose";
import IDriver from "../../DatabaseModels/Driver/IDriver";
import IUserRepository from "./IDriversRepository";

export default class userRepository implements IUserRepository {
    constructor(
        public readonly driver : Model<IDriver>
    ){}

    getDriverByName(name){
        return this.driver.find({name:name});
    }

    getAllDrivers(){
        return this.driver.find();
    }

    saveDriver(newDriver: IDriver){

        const newCreatedDriver = new this.driver<IDriver>({   
            name:newDriver.name,
            imgPath: newDriver.imgPath,
            createAt: newDriver.createAt,
            isActive: newDriver.isActive,
            email: newDriver.email
          })

        return newCreatedDriver.save()
    }
}