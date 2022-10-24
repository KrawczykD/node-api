import IDriver from "../../DatabaseModels/Driver/IDriver"

export default interface IUserSRepository {
    getDriverByName(name:String),
    getAllDrivers(),
    saveDriver(newDriver:IDriver)
    
}