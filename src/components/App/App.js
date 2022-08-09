import { useState, useEffect } from "react";
import Header from "../Header";
import Converter from "../Converter";
import { fetchCurrency } from "../fetch/fetch-api";

import "./App.scss";

const App = () => {
  const [rates, setRates] = useState({});
  useEffect(() => {
    fetchCurrency().then((res) => {
      setRates(res.rates);
    });
  }, []);
  // console.log("rates", rates);

  return (
    <div className="App">
      <h1>Currency converter</h1>
      <Header rates={rates} />
      <Converter rates={rates} />
    </div>
  );
};

export default App;
