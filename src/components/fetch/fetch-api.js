const fetchAPICurs = () => {
  return fetch(
    `https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5`
  ).then((res) => res.json());
};
export default fetchAPICurs;
