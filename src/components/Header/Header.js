import { useEffect, useState } from "react";
import { fetchApiLayer } from "../fetch/fetch-api";

import s from "./Header.module.scss";

const Header = () => {
  const [amountUAH, setAmountUAN] = useState(1);
  const [amountEUR, setAmountEUR] = useState(1);
  const [amountPLN, setAmountPLN] = useState(1);

  useEffect(() => {
    getFetchCurs();
  }, []);

  const getFetchCurs = () => {
    fetchApiLayer()
      .then((res) => {
        setAmountUAN(res.rates["UAH"]);
        setAmountEUR(res.rates["EUR"]);
        setAmountPLN(res.rates["PLN"]);
      })

      .catch((err) => {});
  };

  console.log("curs", amountUAH);
  return (
    <header className={s.div}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th className={s.th}>Валюта</th>
            <th className={s.th}>Курс</th>
          </tr>
        </thead>
        <tbody className={s.tbody}>
          <tr>
            <td className={s.td}>USD</td>
            <td className={s.td}>{Math.floor(amountUAH * 100) / 100}</td>
          </tr>
          <tr>
            <td className={s.td}>EUR</td>
            <td className={s.td}>
              {Math.floor((amountUAH / amountEUR) * 100) / 100}
            </td>
          </tr>
          <tr>
            <td className={s.td}>PLN</td>
            <td className={s.td}>
              {Math.floor((amountUAH / amountPLN) * 100) / 100}
            </td>
          </tr>
        </tbody>
      </table>
    </header>
  );
};

export default Header;
