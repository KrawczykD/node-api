const express = require('express');

const router = express.Router();

import DatabaseRepository from '../../Repositories/DatabaseRepository/DatabaseRepository';

import IVan from '../../DatabaseModels/Van/IVan';
import Van from '../../DatabaseModels/Van/Van';

import UoW from '../../Repositories/VanRepository/UnityOfWork';

//get all
router.get('/van', async (req, res) => {

  try {
    await databaseRepository.initializeDB();
    const vanUoW = await new UoW(Van);
    res.json(await vanUoW.getAllVans() as Array<IVan>);
  } catch (err) {
    res.status(400).json({ message: err.message })
  } finally{
    databaseRepository.closeDB();
  }
})

//get one by name
router.get('/van/:registrationNumber', async (req, res) => {
  try {
    await databaseRepository.initializeDB();
    const vanUoW = await new UoW(Van);
    res.json(await vanUoW.getVanByRegistrationNumber(req.params.registrationNumber) as Array<IVan>);
  } catch (err) {
    res.status(400).json({ message: err.message })
  } finally{
    databaseRepository.closeDB();
  }
})


// Creating one
router.post('/van/create', async (req, res) => {
    //name: req.query.name,
    const newVan : IVan = {
        registrationNumber: req.query.registrationNumber,
        motDueDate: new Date(new Date().getFullYear() + 1),
        createAt: new Date(),
        isActive: true,
        driverId: req.query.driverId
    }
    try {
      await databaseRepository.initializeDB();
      
      res.status(201).json(await new Van(newVan).save());
    } catch (err) {
      res.status(400).json({ message: err.message })
    } finally {
      DatabaseRepository.closeDB();
    }
  })
  
  export default router;