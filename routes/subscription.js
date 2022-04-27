const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');
const Contract = require('../models/Contract');

router.get('/', (req, res) => {
  Subscription.find()
    .then((s) => {
      res.json(s);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get('/:id', (req, res) => {
  Subscription.findById(req.params.id)
    .then((s) => {
      res.json(s);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete('/:id', (req, res) => {
  Subscription.findByIdAndDelete(req.params.id)
    .then((s) => {
      res.status(200).json(s);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.post('/', (req, res) => {
  var today = new Date();
  var dd = today.getDate();

  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }
  today = mm + '-' + dd + '-' + yyyy;
  console.log('here');
  Subscription.create({
    dateCreation: today,
    dateModification: today,
    userCreator: {
      nom: 'dali',
      email: 'dali@gmail.com',
      img: 'https://avatars1.githubusercontent.com/u/527058?s=460&v=4',
    },
    userModifier: {
      nom: 'dali',
      email: 'dali@gmail.com',
      img: 'https://avatars1.githubusercontent.com/u/527058?s=460&v=4',
    },
    ...req.body,
  })
    .then((subscriptions) => {
      res.status(200).json(subscriptions);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.patch('/:id', (req, res) => {
  Subscription.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((s) => {
      res.status(200).json(s);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.patch('/:id/validate', (req, res) => {
  Subscription.findById(req.params.id).then((s) => {
    s.isDraft = false;
    const c = new Contract(s).save();
    s.delete();
    res.status(200).json(c);
  });
});

module.exports = router;
