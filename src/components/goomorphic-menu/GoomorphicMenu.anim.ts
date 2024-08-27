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
    left: "calc(50% - 140px/2 - 175px)",
    height: 38,
    padding: "0px 85px 0px 5px",
    justifyContent: "flex-start",
  },
  about: {
    left: "calc(50% - 50px/2 - 179px)",
    height: 50,
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
  features: {
    left: "calc(50% - 50px/2 - 179px)",
    height: 50,
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
  pricing: {
    left: "calc(50% - 50px/2 - 179px)",
    height: 50,
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
  contact: {
    left: "calc(50% - 210px/2 - 120px)",
    height: 50,
    padding: "0px 150px 0 10px",
    justifyContent: "flex-start",
    borderRadius: "20px",
  },
};
export const rightDot = {
  home: {
    right: "calc(50% - 132px/2 - 179px)",
    height: 38,
    border: "1px solid grey",
    padding: "0px 75px 0 5px",
    justifyContent: "flex-start",
  },
  about: {
    right: "calc(50% - 50px/2 - 179px)",
    height: 50,
    border: "0px solid transparent",
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
    transition: { type: "spring", duration: 1, border: { duration: 0.1 } },
  },
  features: {
    right: "calc(50% - 50px/2 - 179px)",
    height: 50,
    border: "0px solid transparent",
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
  pricing: {
    right: "calc(50% - 50px/2 - 179px)",
    height: 50,
    border: "0px solid transparent",
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
  contact: {
    right: "calc(50% - 128px/2 - 130px)",
    height: 50,
    border: "0px solid transparent",
    padding: "0px 68px 0 10px",
    justifyContent: "flex-start",
    borderRadius: "22px",
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
    width: 80,
    transition: { delay: 0.25 },
  },
};
