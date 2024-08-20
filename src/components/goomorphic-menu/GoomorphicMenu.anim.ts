export const span = {
  home: {
    opacity: 1,
  },
  about: {
    opacity: 0,
  },
  features: {
    opacity: 0,
  },
  pricing: {
    opacity: 0,
  },
  contact: {
    opacity: 1,
  },
};

export const leftDot = {
  home: {
    left: "35%",
    height: 38,
    padding: "0px 85px 0px 5px",
    justifyContent: "flex-start",
  },
  about: {
    left: "38%",
    height: 50,
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
  features: {
    left: "38%",
    height: 50,
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
  pricing: {
    left: "38%",
    height: 50,
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
  contact: {
    left: "40%",
    height: 50,
    padding: "0px 150px 0 10px",
    justifyContent: "flex-start",
  },
};
export const rightDot = {
  home: {
    right: "35%",
    height: 38,
    border: "1px solid grey",
    padding: "0px 75px 0 5px",
    justifyContent: "flex-start",
  },
  about: {
    right: "38%",
    height: 50,
    border: "0px solid transparent",
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
    transition: { type: "spring", duration: 1, border: { duration: 0.1 } },
  },
  features: {
    right: "38%",
    height: 50,
    border: "0px solid transparent",
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
  pricing: {
    right: "38%",
    height: 50,
    border: "0px solid transparent",
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
  contact: {
    right: "40%",
    height: 50,
    border: "0px solid transparent",
    padding: "0px 68px 0 10px",
    justifyContent: "flex-start",
  },
};

export const mainBar = {
  home: {
    width: 500,
  },
  about: {
    width: 250,
  },
  features: {
    width: 250,
  },
  pricing: {
    width: 250,
  },
  contact: {
    width: 70,
    transition: { delay: 0.25 },
  },
};
