const subset = <T>(A: T[], B: T[]): boolean => {
  return A.every((value) => B.includes(value));
};

export default subset;
