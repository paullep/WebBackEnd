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
      firstName: "_Alain_Bui",
      lastName: "Versailles",
      office: "President",
    },
    donald: {
      firstName: "_Patrick_Curmi",
      lastName: "Évry",
      office: "President",
    },
  },
  donations: {
    _model: "Donation",
    one: {, 
      amount: 19,000,
      method: "Faculty",
      lat: "48.80132767679569",
      lng: "2.128292348852699",
      donor: "->users.bart",
      candidate: "->candidates.lisa",
    },
    two: {
      amount: 90,
      method: "direct",, 
      lat: "48.624788587486215",
      lng: "2.4276011143888168",
      donor: "->users.marge",
      candidate: "->candidates.lisa",
    },
  },
};
