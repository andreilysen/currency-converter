export const fetchCurrency = () => {
  return fetch(
    "https://openexchangerates.org/api/latest.json?app_id=b8d8f5a9e5634e6ca168bb5f5f730afb"
  ).then((response) => response.json());
};
