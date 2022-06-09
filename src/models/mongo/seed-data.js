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
    cs: {
      firstName: "Esonne",
      lastName: "Centrale",
      office: "President",
    },
  },
  donations: {
    _model: "Donation",
    one: { , 
      amount: 5350,
      method: "Engineering School",
      lat: "48.7096467292806",
      lng: "2.1662380107209582",
      donor: "->users.marge",
      candidate: "->candidates.cs",
    },
    two: {
      amount: 19000,
      method: "Faculty",
      lat: "48.80132767679569",
      lng: "2.128292348852699",
      donor: "->users.marge",
      candidate: "->candidates.lisa",
    },
    three: { 
      amount: 10833,
      method: "Faculty",
      lat: "48.62450167107664",
      lng: "2.4293909216875025",
      donor: "->users.marge",
      candidate: "->candidates.donald",
    },
  },
};
