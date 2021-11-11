const getScore = () => {
  const score =
    window.localStorage.getItem("score") === null
      ? 0
      : parseInt(window.localStorage.getItem("score"));
  return parseInt(score);
};
export default getScore;
