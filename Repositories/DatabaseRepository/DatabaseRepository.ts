import { connect , Connection, disconnect} from 'mongoose';
import IDatabaseRepository from './IDatabaseRepository';

export default class DatabaseRepository implements IDatabaseRepository {
    constructor(
        public readonly _connection: Connection,
        public readonly _connectionString: string,
    ){
    };
    
    
    
     initializeDB (){
        this._connection.on('error', (error) => console.error(error));
        this._connection.once('open', () => console.log('Connected to Database'));

        return connect(this._connectionString);
    };
    
    closeDB(){
        this._connection.close();
        console.log("Disconected from Database");
    };
};