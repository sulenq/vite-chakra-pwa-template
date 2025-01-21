const formatCount = (number: number): string => {
  const units = ["", "K", "J", "M", "T", "P", "E"];
  let index = 0;

  while (number >= 1000 && index < units.length - 1) {
    number /= 1000;
    index++;
  }

  return `${number}${units[index]}`;
};

export default formatCount;
