const express = require('express');
const router = express.Router();
const Contract = require('../models/Contract');

router.get('/', (req, res) => {
  Contract.find()
    .then((c) => {
      res.json(c);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get('/:id', (req, res) => {
  Contract.findById(req.params.id)
    .then((c) => {
      res.json(c);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/', (req, res) => {
  // var today = new Date();
  // var dd = today.getDate();

  // var mm = today.getMonth() + 1;
  // var yyyy = today.getFullYear();
  // if (dd < 10) {
  //   dd = '0' + dd;
  // }

  // if (mm < 10) {
  //   mm = '0' + mm;
  // }
  // today = mm + '-' + dd + '-' + yyyy;
  Contract.create({
    // isDraft: true,
    // createdAt: today,
    // updatedAt: today,
    // userCreator: 'dali',
    ...req.body,
  })
    .then((c) => {
      res.status(200).json(c);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.patch('/:id', (req, res) => {
  Contract.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((c) => {
      res.status(200).json(c);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/:id/comments', (req, res) => {});
router.patch('/:id/comments', (req, res) => {});

router.delete('/:id', (req, res) => {
  Contract.findByIdAndDelete(req.params.id)
    .then((c) => {
      res.status(200).json(c);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
