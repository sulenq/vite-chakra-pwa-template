const parseNumber = (numString: string | undefined | null) => {
  let cleanedString;
  if (!numString) return null;

  const validNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const isNumValid = validNums?.some((validNum) =>
    numString?.includes(validNum)
  );
  if (isNumValid) {
    const numCapped = numString?.substring(0, 19);
    cleanedString = numCapped?.replace(/\./g, "");
  } else {
    cleanedString = "";
  }

  if (cleanedString === "") {
    return null;
  } else {
    return parseInt(cleanedString);
  }
};

export default parseNumber;
