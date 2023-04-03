export const sliceType = (lett) => {
    if (lett.includes("_")) {
      lett = lett.slice(0, 4) + " " + lett.slice(5, 10);
      return lett;
    }
    return lett;
  };