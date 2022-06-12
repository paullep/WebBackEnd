export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret",
    },
  },
  candidates: {
    _model: "Candidate",
    lisa: {
      firstName: "Yvelines",
      lastName: "Versailles",
      office: "President",
    },
    donald: {
      firstName: "Essonne",
      lastName: "Evry",
      office: "President",
    },
    ens: {
      firstName: "Esonne",
      lastName: "ENS",
      office: "President",
    },
    optique: {
      firstName: "Esonne",
      lastName: "Optique",
      office: "President",
    },
    agro: {
      firstName: "Esonne",
      lastName: "Agro",
      office: "President",
    },
    iutcachan: {
      firstName: "Esonne",
      lastName: "IUTCachan",
      office: "President",
    },
    iutsceaux: {
      firstName: "Esonne",
      lastName: "IUTSceaux",
      office: "President",
    },
    iutsaclay: {
      firstName: "Esonne",
      lastName: "IUTSaclay",
      office: "President",
    },
    polytech: {
      firstName: "Esonne",
      lastName: "Polytech",
      office: "President",
    },
    main: {
      firstName: "Esonne",
      lastName: "Saclay",
      office: "President",
    },
    cs: {
      firstName: "Esonne",
      lastName: "Centrale",
      office: "President",
    },
  },
  donations: {
    _model: "Donation",
    one: {
      amount: 5350,
      method: "Engineering School",
      lat: "48.7096467292806",
      lng: "2.1662380107209582",
      image: "https://www.bouygues-construction.com/sites/default/files/centralesupelec_saclay_bouygues_construction_1_28.jpg https://www.centralesupelec.fr/sites/all/themes/cs_theme/medias/common/images/intro/logo.png https://www.centralesupelec.fr/sites/default/files/styles/1140x426/public/push-fr-campus_0.jpg?itok=qrsSmk_E https://detail-cdn.s3.eu-central-1.amazonaws.com/media/catalog/product/K/L/KLT-Lab-City-OMA-Philippe-Ruault.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
      donor: "->users.homer",
      candidate: "->candidates.cs",
    },
    two: {
      amount: 19000,
      method: "Faculty",
      lat: "48.80132767679569",
      lng: "2.128292348852699",
      image: "https://i.ytimg.com/vi/_cv_0pSC0_8/maxresdefault.jpg https://eurasiaproject.eu/wp-content/uploads/2018/10/stquentin-1458328270.jpg https://upload.wikimedia.org/wikipedia/fr/3/31/Logo-UVSQ-2020-RVB.jpg https://www.david.uvsq.fr/wp-content/uploads/sites/142/2018/06/laboratoire-1.png",
      donor: "->users.homer",
      candidate: "->candidates.lisa",
    },
    three: { 
      amount: 10833,
      method: "Faculty",
      lat: "48.62450167107664",
      lng: "2.4293909216875025",
      image: "https://assets.change.org/photos/0/ck/oq/bHcKoQPVAdyPyRY-800x450-noPad.jpg?1617639912",
      donor: "->users.bart",
      candidate: "->candidates.donald",
    },
  },
};
