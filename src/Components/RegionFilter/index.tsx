import { useState } from "react";
import styles from "./filterregion.module.scss";

export default function FilterRegion({ valueSelect, theme }) {
  // GET THE VALUE OF SSELECT
  const [selectvalue, setSelectvalue] = useState("");
  valueSelect(selectvalue);

  // ONCHANGE ON THE SELECT

  return (
    <>
      <div className={theme}>
        <select
          onChange={(e) => setSelectvalue(e.target.value)}
          className={`${styles.select_region} background text`}
        >
          <option value="">Filter By Region</option>
          <option value="AF">Africa</option>
          <option value="AM">America</option>
          <option value="AS">Asia</option>
          <option value="EU">Europe</option>
          <option value="OC">Oceania</option>
        </select>
      </div>
    </>
  );
}
