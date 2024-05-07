// IMPROTS
import { Link } from "react-router-dom";
import styles from "./countrycard.module.scss";

// $$$$$$$$$$$$$$$$$
export default function CardCountry({ obj, theme }) {
  console.log(obj);

  // Check if obj is defined before accessing its properties
  if (!obj || !obj.coatOfArms) {
    console.log("Empty or missing coatOfArms property:", obj);
    return null;
  }

  // console.log(obj.coatOfArms.svg);
  // console.log(obj.coatOfArms.png);

  return (
    <div className={theme}>
      <Link className={styles.remove_deco_lin} to={`/${obj.name.common}`}>
        <div className={styles.Card_Country}>
          <div className={styles.img_country}>
            {obj.flags.png && <img src={obj.flags.png} alt={obj.flags.png} />}
          </div>
          <div className={`background text ${styles.details_country}`}>
            <div className={styles.country_name_box}>
              <h3>{obj.name.common}</h3>
            </div>
            <div className={styles.info_country}>
              <p>
                <span className={styles.deatils_span}>Poupulation :</span>{" "}
                {obj.population}
              </p>
              <p>
                <span className={styles.deatils_span}>Region :</span>
                {obj.region}
              </p>
              <p>
                <span className={styles.deatils_span}>Capital : </span>
                {obj.capital}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
