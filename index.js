import { api } from '@serverless/cloud';
import { ObjectId } from 'mongodb';
import { contracts } from './mongo';

api.get('/contract', async (req, res) => {
  const result = await contracts.find().toArray();

  res.send({
    result,
  });
});

api.get('/contract/count', async (req, res) => {
  const result = await contracts.find().toArray();
  const count = result.length;

  res.send({
    count,
  });
});

api.get('/contract/:id', async (req, res) => {
  const { id } = req.params;
  const result = await contracts.find({ _id: ObjectId(id) }).toArray();

  res.send({
    result,
  });
});

api.post('/contract', async (req, res) => {
  const { data } = req.body;
  await contracts.insertOne({ ...data });

  res.send({
    result: 'ok',
  });
});

api.put('/contract/:id', async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  await contracts.updateOne({ _id: ObjectId(id) }, { $set: { ...data } });

  res.send({
    result: 'ok',
  });
});

api.delete('/contract/:id', async (req, res) => {
  const { id } = req.params;
  await contracts.deleteOne({ _id: ObjectId(id) });

  res.send({
    result: 'ok',
  });
});
