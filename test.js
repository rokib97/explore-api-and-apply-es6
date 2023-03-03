function gemsToDiamond(gems1, gems2, gems3) {
  if (
    typeof gems1 !== "number" ||
    typeof gems2 !== "number" ||
    typeof gems3 !== "number"
  ) {
    return "Please provide a valid number...";
  }
  const totalDiamond = gems1 * 21 + gems2 * 32 + gems3 * 43;
  return totalDiamond > 2000 ? totalDiamond - 2000 : totalDiamond;
}
