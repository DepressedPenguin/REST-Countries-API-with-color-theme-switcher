import { useState } from "react";
import styles from "./countryfilter.module.scss";

export default function FilterCountry({ value, theme }) {
  //
  const [userinput, setUserinput] = useState("");
  value(userinput);
  return (
    <>
      <div className={`${theme} ${styles.container_input}`}>
        <input
          className={`background ${styles.input_country_filter}`}
          type="text"
          placeholder="Search For Country..."
          onChange={(e) => setUserinput(e.target.value)}
        />
      </div>
    </>
  );
}
