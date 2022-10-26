import IVan from "../../DatabaseModels/Van/IVan";
import VanRepository from './VanRepository';
import IUnityOfWorks from "./IUnityOfWork";



export default class UnityOfWork implements IUnityOfWorks{

    private vanRepository = new VanRepository();

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