import React from "react";
import Select from "react-select";

import s from "./Converter.module.scss";

const Converter = ({ curs }) => {
  const options = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "UAN", label: "UAN" },
  ];
  return (
    <div>
      <div>
        <input />
        <Select
          className={s.select}
          options={options}
          defaultValue={options[0]}
        />
      </div>
      <div>
        <input />
        <Select
          className={s.select}
          options={options}
          defaultValue={options[2]}
        />
      </div>
    </div>
  );
};

export default Converter;
