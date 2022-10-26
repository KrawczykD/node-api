import IDriver from "../../DatabaseModels/Driver/IDriver";
import DriverRepository from './DriversRepository';
import { Connection, Model, Schema} from "mongoose";
import IUnityOfWorks from "./IUnityOfWork";



export default class UnityOfWork implements IUnityOfWorks{
 
    private driverRepository = new DriverRepository();

    getDriverByName(name : string){
        return this.driverRepository.getDriverByName(name);
    }

    getAllDrivers(){
        return this.driverRepository.getAllDrivers();
    }

    saveDriver(newDriver : IDriver){
        return this.driverRepository.saveDriver(newDriver)
    }

}