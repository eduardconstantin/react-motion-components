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
    left: "34.7%",
    height: 38,
    padding: "0px 85px 0px 5px",
    justifyContent: "flex-start",
  },
  about: {
    left: "37.5%",
    height: 50,
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
  features: {
    left: "37.5%",
    height: 50,
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
  pricing: {
    left: "37.5%",
    height: 50,
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
  contact: {
    left: "40%",
    height: 50,
    padding: "0px 150px 0 10px",
    justifyContent: "flex-start",
    borderRadius: "20px",
  },
};
export const rightDot = {
  home: {
    right: "34.7%",
    height: 38,
    border: "1px solid grey",
    padding: "0px 75px 0 5px",
    justifyContent: "flex-start",
  },
  about: {
    right: "37.5%",
    height: 50,
    border: "0px solid transparent",
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
    transition: { type: "spring", duration: 1, border: { duration: 0.1 } },
  },
  features: {
    right: "37.5%",
    height: 50,
    border: "0px solid transparent",
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
  pricing: {
    right: "37.5%",
    height: 50,
    border: "0px solid transparent",
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
  contact: {
    right: "37%",
    height: 50,
    border: "0px solid transparent",
    padding: "0px 68px 0 10px",
    justifyContent: "flex-start",
    borderRadius: "22px",
  },
};

export const mainBar = {
  home: {
    width: "31vw",
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
    width: 50,
    transition: { delay: 0.25 },
  },
};
