import { Link } from "react-router-dom";
import styles from "./countrycard.module.scss";

interface CardCountryProps {
  obj: {
    name: {
      common: string;
    };
    flags: {
      png: string;
    };
    population: number;
    region: string;
    capital: string;
    coatOfArms?: any; // Adjust the type as necessary
  };
  theme: string;
}

export default function CardCountry({ obj, theme }: CardCountryProps) {
  // Check if obj is defined before accessing its properties
  if (!obj || !obj.flags.png) {
    console.log("Empty or missing flags.png property:", obj);
    return null;
  }

  return (
    <div className={theme}>
      <Link className={styles.remove_deco_lin} to={`/${obj.name.common}`}>
        <div className={styles.Card_Country}>
          <div className={styles.img_country}>
            {obj.flags.png && <img src={obj.flags.png} alt={obj.name.common} />}
          </div>
          <div className={`background text ${styles.details_country}`}>
            <div className={styles.country_name_box}>
              <h3>{obj.name.common}</h3>
            </div>
            <div className={styles.info_country}>
              <p>
                <span className={styles.deatils_span}>Population :</span>{" "}
                {obj.population}
              </p>
              <p>
                <span className={styles.deatils_span}>Region :</span>{" "}
                {obj.region}
              </p>
              <p>
                <span className={styles.deatils_span}>Capital :</span>{" "}
                {obj.capital}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
