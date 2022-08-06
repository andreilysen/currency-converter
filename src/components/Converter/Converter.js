import { useState, useEffect } from "react";
import CurrencyInput from "./currencyInput";
import { fetchApiLayer } from "../fetch/fetch-api";

const Converter = () => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("UAH");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetchApiLayer()
      .then((res) => {
        setRates(res.rates);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);

  const handleAmount1Change = (amount1) => {
    setAmount2(((amount1 * rates[currency2]) / rates[currency1]).toFixed(2));
    setAmount1(amount1.toFixed(2));
  };

  const handleCurrency1Change = (currency1) => {
    setAmount2(((amount1 * rates[currency2]) / rates[currency1]).toFixed(2));
    setCurrency1(currency1);
  };

  const handleAmount2Change = (amount2) => {
    setAmount1(((amount2 * rates[currency1]) / rates[currency2]).toFixed(2));
    setAmount2(amount2.toFixed(2));
  };

  const handleCurrency2Change = (currency2) => {
    setAmount1(((amount2 * rates[currency1]) / rates[currency2]).toFixed(2));
    setCurrency2(currency2);
  };

  return (
    <div>
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
      />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
      />
    </div>
  );
};

// class Converter extends Component {
//   state = {
//     firstInput: { ccy: "UAN", value: 1, rent: 1 },
//     lostInput: {
//       ccy: this.props.curs[0].ccy,
//       value: this.props.curs[0].buy,
//       rent: this.props.curs[0].buy,
//     },
//    // thirdCur: { value: thi s.props.curs[1].buy, rent: this.props.curs[1].buy },
//   };

//   handleChangeOneInput = (e) => {
//     //   console.log("e", e.currentTarget.value);
//     this.setState({
//       firstInput: { ...this.state.firstInput, value: e.currentTarget.value },
//       lostInput: {
//         ...this.state.lostInput,
//         value: e.currentTarget.value * this.state.lostInput.rent,
//       },
//     });
//     console.log("this.state", this.state);
//   };
//   handleChangeSecInput = (e) => {
//     console.log("e", e.currentTarget.value);

//     this.setState({
//       firstInput: {
//         ...this.state.firstInput,
//         value: e.currentTarget.value / this.state.lostInput.rent,
//       },
//       lostInput: {
//         ...this.state.lostInput,
//         value: e.currentTarget.value,
//       },
//     });
//     // console.log(e.currentTarget.value / this.state.lostInput.rent);
//   };

//   handleChangeSelectFirst = (e) => {
//     console.log("e", e);
//     if (e.value === this.state.firstInput.ccy) {
//       this.setState({
//         firstInput: { ...this.state.firstInput },
//         lostInput: { ...this.state.firstInput },
//       });
//     }
//     if (e.value === this.props.curs[1].ccy) {
//       this.setState({
//         firstInput: { ...this.state.firstInput },
//         lostInput: {
//           ccy: this.props.curs[1].ccy,
//           value: this.state.firstInput.value * this.props.curs[1].buy,
//           rent: this.props.curs[1].buy,
//         },
//         // thirdCur: {
//         //   value: this.props.curs[0].buy,
//         //   rent: this.props.curs[0].buy,
//         // },
//       });
//     } else if (e.value === this.props.curs[0].ccy) {
//       this.setState({
//         firstInput: { ...this.state.firstInput },
//         lostInput: {
//           ccy: this.props.curs[0].ccy,
//           value: this.state.firstInput.value * this.props.curs[0].buy,
//           rent: this.props.curs[0].buy,
//         },
//         // thirdCur: {
//         //   value: this.props.curs[1].buy,
//         //   rent: this.props.curs[1].buy,
//         // },
//       });
//     }
//   };
//   handleChangeSelectSec = (e) => {
//     console.log("e", e);
//     if (e.value === this.state.lostInput.ccy) {
//       this.setState({
//         firstInput: { ...this.state.lostInput },
//         lostInput: { ...this.state.lostInput },
//       });
//     }
//     if (e.value === this.props.curs[1].ccy) {
//       this.setState({
//         firstInput: {
//           ccy: this.props.curs[1].ccy,
//           value: this.state.lostInput.rent * this.props.curs[1].buy,
//           rent: this.props.curs[1].buy,
//         },
//         lostInput: { ...this.state.firstInput },
//         // thirdCur: {
//         //   value: this.props.curs[0].buy,
//         //   rent: this.props.curs[0].buy,
//         // },
//       });
//     } else if (e.value === this.props.curs[0].ccy) {
//       this.setState({
//         firstInput: {
//           ccy: this.props.curs[0].ccy,
//           value: this.state.lostInput.rent * this.props.curs[0].buy,
//           rent: this.props.curs[0].buy,
//         },
//         lostInput: { ...this.state.firstInput },
//         // thirdCur: {
//         //   value: this.props.curs[1].buy,
//         //   rent: this.props.curs[1].buy,
//         // },
//       });
//     }
//   };
//   render() {
//     console.log("prop", this.state);
//     const options = [
//       { value: "UAN", label: "UAN" },
//       { value: this.props.curs[0].ccy, label: this.props.curs[0].ccy },
//       { value: this.props.curs[1].ccy, label: this.props.curs[1].ccy },
//     ];

//     return (
//       <div>
//         <div>
//           <input
//             // defaultValue={this.state.firstInput.value}
//             value={this.state.firstInput.value}
//             onChange={this.handleChangeOneInput}
//           />
//           <Select
//             className={s.select}
//             options={options}
//             defaultValue={options[1]}
//             onChange={this.handleChangeSelectFirst}
//           />
//         </div>
//         <div>
//           <input
//             // defaultValue={this.state.lostInput.value}
//             value={this.state.lostInput.value}
//             onChange={this.handleChangeSecInput}
//           />
//           <Select
//             className={s.select}
//             options={options}
//             defaultValue={options[0]}
//             onChange={this.handleChangeSelectSec}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default Converter;
