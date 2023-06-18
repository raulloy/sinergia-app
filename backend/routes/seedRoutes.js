import express from 'express';
import data from '../data.js';
import Diagnostic from '../models/diagnosticModel.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Diagnostic.deleteMany({});
  const createdDiagnoses = await Diagnostic.insertMany(data.diagnoses);

  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);

  res.send({ createdDiagnoses, createdUsers });
});
export default seedRouter;
