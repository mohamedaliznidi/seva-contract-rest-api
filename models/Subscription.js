const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  dateCreation: String,
  dateModification: String,
  userCreator: {
    nom: String,
    email: String,
    img: String,
  },
  userModifier: {
    nom: String,
    email: String,
    img: String,
  },
  souscripteur: {
    fullName: String,
    nss: String,
    dateNais: String,
    mobile: String,
    email: String,
    adresse: String,
  },
  produit: {
    id: String,
    nom: String,
    description: String,
  },
  cotisation: {
    modePayement: String,
    frequencePayement: String,
    montant: Number,
    jourAppel: String,
    tiers: String,
  },
});

// const hello = 'hello';

module.exports = mongoose.model('Subscription', SubscriptionSchema);
