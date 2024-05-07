import { useState } from "react";
import styles from "./countryfilter.module.scss";

interface FilterCountryProps {
  value: (value: string) => void;
  theme: string;
}

export default function FilterCountry({ value, theme }: FilterCountryProps) {
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
