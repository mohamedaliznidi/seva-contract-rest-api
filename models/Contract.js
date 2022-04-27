const mongoose = require('mongoose');

const ContractSchema = new mongoose.Schema({
  isDraft: Boolean,
  isActif: Boolean,
  dateCreation: String,
  dateModification: String,
  dateValidation: String,
  dateCloture: String,
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
  userValidate: {
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

module.exports = mongoose.model('Contract', ContractSchema);
