const getName = () => {
  const name =
    window.localStorage.getItem("nameCandy") === null
      ? "Anonimo"
      : window.localStorage.getItem("nameCandy").toString();
  return name;
};
export default getName;
