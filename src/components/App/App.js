import { useEffect, useState } from "react";
import fetchApi from "../fetch/fetch-api";

import Header from "../Header";
import Converter from "../Converter";

import "./App.css";

const App = () => {
  const [curs, setCurs] = useState([]);

  useEffect(() => {
    getFetchCurs();
  }, []);

  const getFetchCurs = () => {
    fetchApi()
      .then((res) => {
        // console.log("res", res);
        setCurs(res.slice(0, 2));
      })
      .catch((err) => {});
  };
  console.log("curs App", curs);
  return (
    <div className="App">
      <Header curs={curs} />
      <Converter curs={curs} />
    </div>
  );
};

export default App;
