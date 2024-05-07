import FilterCountry from "../CountryFilter";
import FilterRegion from "../RegionFilter";
import styles from "./filter.module.scss";

export default function Filter({ value, valueSelect, theme }) {
  return (
    <>
      <div className={`${theme}`}>
        <div className={`${styles.main_filter} background`}>
          <div className={`${styles.filter_country_name}`}>
            <FilterCountry theme={theme} value={value} />
          </div>
          <div className={styles.filter_country_region}>
            <FilterRegion theme={theme} valueSelect={valueSelect} />
          </div>
        </div>
      </div>
    </>
  );
}
