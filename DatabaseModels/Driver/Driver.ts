import IDriver from './IDriver';

import {model, Schema, Model} from 'mongoose';


const driverSchema = new Schema<IDriver>({
    name: {type:String, required: true},
    imgPath: {type:String, required: true},
    createAt: {type:Date, required: true},
    isActive: {type:Boolean, required: true},
    email: {type:String, required: true}
})

//export default model('Driver' , driverSchema);
const Driver: Model<IDriver> = model('Driver' , driverSchema);

export default Driver;