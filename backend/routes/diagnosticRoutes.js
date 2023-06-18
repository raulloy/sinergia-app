import express from 'express';
import Diagnostic from '../models/diagnosticModel.js';

const diagnosticRouter = express.Router();

diagnosticRouter.get('/', async (req, res) => {
  const diagnoses = await Diagnostic.find();
  res.send(diagnoses);
});

diagnosticRouter.get('/slug/:slug', async (req, res) => {
  const diagnostic = await Diagnostic.findOne({
    slug: { $eq: req.params.slug },
  });
  if (diagnostic) {
    res.send(diagnostic);
  } else {
    res.status(404).send({ message: 'Diagnostic Not Found' });
  }
});

diagnosticRouter.get('/:id', async (req, res) => {
  const diagnostic = await Diagnostic.findById(req.params.id);
  if (diagnostic) {
    res.send(diagnostic);
  } else {
    res.status(404).send({ message: 'Diagnostic Not Found' });
  }
});

export default diagnosticRouter;
