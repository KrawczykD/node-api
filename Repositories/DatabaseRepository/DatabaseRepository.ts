import { connect , connection, disconnect} from 'mongoose';
import IDatabaseRepository from './IDatabaseRepository';

// missing static intefface
export default class DatabaseRepository {
    
    private static readonly connectionString = "mongodb://localhost:27017/API";

    public static initializeDB (){
        connection.on('error', (error) => console.error(error));
        connection.once('open', () => console.log('Connected to Database'));

        return connect(this.connectionString);
    };
    
    public static closeDB(){
        connection.close();
        console.log("Disconected from Database");
    };
};