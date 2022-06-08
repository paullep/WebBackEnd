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
      firstName: " (President: Alain Bui)",
      lastName: "Versailles",
      office: "President",
    },
    donald: {
      firstName: "(President: Patrick Curmi)",
      lastName: "Évry",
      office: "President",
    },
  },
  donations: {
    _model: "Donation",
    one: {
      amount: 19,000,
      method: "Faculty",
      lat: "48.80132767679569",
      lng: "2.128292348852699",
      donor: "->users.marge",
      candidate: "->candidates.lisa",
    },
    two: {
      amount: 10,833,
      method: "direct",
      lat: "52.149220",
      lng: "-6.994620",
      donor: "->users.marge",
      candidate: "->candidates.lisa",
    },
  },
};
