const express = require('express');

const router = express.Router();

import DatabaseRepository from '../../Repositories/DatabaseRepository/DatabaseRepository';

import IDriver from '../../DatabaseModels/Driver/IDriver';
import Driver from '../../DatabaseModels/Driver/Driver';

import UoW from '../../Repositories/DriversRepository/UnityOfWork';

//get all
router.get('/driver', async (req, res) => {

  try {
    await DatabaseRepository.initializeDB();
    const driverUoW = await new UoW();
    res.json(await driverUoW.getAllDrivers() as Array<IDriver>);
  } catch (err) {
    res.status(400).json({ message: err.message })
  } finally{
    DatabaseRepository.closeDB();
  }
})

//get one by name
router.get('/driver/:name', async (req, res) => {
  try {
    await DatabaseRepository.initializeDB();
    const driverUoW = await new UoW();
    res.json(await driverUoW.getDriverByName(req.params.name) as Array<IDriver>);
  } catch (err) {
    res.status(400).json({ message: err.message })
  } finally{
    DatabaseRepository.closeDB();
  }
})


// Creating one
router.post('/driver/create', async (req, res) => {

  const newDriver : IDriver = {   
    name: req.query.name,
    imgPath: req.query.imgPath,
    createAt:new Date(),
    isActive: true,
    email: req.query.email
  }
  try {
    await DatabaseRepository.initializeDB();
    const driverUoW = await new UoW();
    res.status(201).json(await driverUoW.saveDriver(newDriver));
  } catch (err) {
    res.status(400).json({ message: err.message })
  } finally {
    DatabaseRepository.closeDB();
  }
})

export default router;