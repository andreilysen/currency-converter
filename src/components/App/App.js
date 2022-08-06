import Header from "../Header";
import Converter from "../Converter";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <h1>Currency converter</h1>
      <Header />
      <Converter />
    </div>
  );
};

export default App;
