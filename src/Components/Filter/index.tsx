import FilterCountry from "../CountryFilter";
import FilterRegion from "../RegionFilter";
import styles from "./filter.module.scss";

interface FilterProps {
  value: (value: string) => void;
  valueSelect: (valueSelect: string) => void; // Corrected type
  theme: string;
}

export default function Filter({ value, valueSelect, theme }: FilterProps) {
  return (
    <>
      <div className={`${theme}`}>
        <div className={`${styles.main_filter} background`}>
          <div className={`${styles.filter_country_name}`}>
            <FilterCountry theme={theme} value={value} />
          </div>
          <div className={styles.filter_country_region}>
            {/* Ensure valueSelect is called as a function */}
            <FilterRegion theme={theme} valueSelect={valueSelect} />
          </div>
        </div>
      </div>
    </>
  );
}
