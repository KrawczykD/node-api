import Ivan from './IVan';
import IDriver from '../Driver/IDriver';

import {model, Schema, Model} from 'mongoose';
import IVan from './IVan';

const vanSchema = new Schema<IVan>({
    registrationNumber : {type: String, required:true},
    motDueDate : {type: Date, required:true},
    createAt : {type: Date, required:true},
    isActive : {type: Boolean, required:true},
    driverId : {type: String, required:true}
})

const Van: Model<IVan> = model('Van',vanSchema);

export default Van;