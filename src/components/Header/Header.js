import s from "./Header.module.scss";

const Header = ({ curs }) => {
  return curs.length > 0 ? (
    <>
      <header className={s.div}>
        <table className={s.table}>
          <thead className={s.thead}>
            <tr>
              <th className={s.th}>Валюта</th>
              <th className={s.th}>Покупка</th>
              <th className={s.th}>Продажа</th>
            </tr>
          </thead>
          <tbody className={s.tbody}>
            {curs.map(({ buy, sale, ccy }) => (
              <tr key={ccy}>
                <td className={s.td}>{ccy}</td>
                <td className={s.td}>{Math.floor(buy * 100) / 100}</td>
                <td className={s.td}>{Math.floor(sale * 100) / 100}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={s.vector}></div>
      </header>
    </>
  ) : null;
};

export default Header;
