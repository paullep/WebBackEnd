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
  },
  donations: {
    _model: "Donation",
    one: {
      amount: 19000,
      method: "Faculty",
      lat: "48.80132767679569",
      lng: "2.128292348852699",
      donor: "->users.marge",
      candidate: "->candidates.lisa",
    },
    two: { 
      amount: 10833,
      method: "direct",
      lat: "48.62450167107664",
      lng: "2.4293909216875025",
      donor: "->users.marge",
      candidate: "->candidates.donald",
    },
  },
};
