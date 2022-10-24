import IVan from "../../DatabaseModels/Van/IVan"

export default interface IUserSRepository {
    getVanByRegistrationNumber(registrationNumber:String),
    getAllVans(),
    saveVan(newVan:IVan)
    
}