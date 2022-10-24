const express = require('express')
const app = express()
const port = 3000


import driverRouter from '../Routes/DriversRoutes/DriversRoutes';
import vanRouter from '../Routes/VanRoutes/VanRoutes';

export default function initializeServer(){
    
    app.use(express.json());
    
    app.use('/', driverRouter);
    app.use('/', vanRouter);
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })

}
