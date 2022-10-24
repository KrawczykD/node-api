import IVan from "../../DatabaseModels/Van/IVan";
import VanRepository from './VanRepository';
import {Model} from "mongoose";
import IUnityOfWorks from "./IUnityOfWork";



export default class UnityOfWork implements IUnityOfWorks{
    constructor(
        private readonly _van : Model<IVan>
        
        ){}


    private vanRepository = new VanRepository(this._van);

    getVanByRegistrationNumber(registrationNumber : string){
        return this.vanRepository.getVanByRegistrationNumber(registrationNumber);
    }

    getAllVans(){
        return this.vanRepository.getAllVans();
    }

    saveDriver(newVan : IVan){
        return this.vanRepository.saveVan(newVan);
    }

}