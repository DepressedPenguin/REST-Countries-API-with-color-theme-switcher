import { useState } from "react";
import styles from "./filterregion.module.scss";

interface FilterRegionProps {
  valueSelect: (value: string) => void; // Corrected type
  theme: string;
}

export default function FilterRegion({
  valueSelect,
  theme,
}: FilterRegionProps) {
  // GET THE VALUE OF SELECT
  const [, setSelectValue] = useState("");

  // ON CHANGE HANDLER FOR THE SELECT
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectValue(value);
    valueSelect(value); // Call the valueSelect function with the selected value
  };

  return (
    <div className={theme}>
      <select
        onChange={handleSelectChange}
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
  );
}
