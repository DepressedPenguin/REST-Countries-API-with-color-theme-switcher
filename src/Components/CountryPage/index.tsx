import { Link } from "react-router-dom";
import styles from "./countrypage.module.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

type ThemeProps = {
  theme: string;
};

export default function CCountryPage({ theme }: ThemeProps) {
  const { name } = useParams();

  const {
    data: countryInfo,
    isPending: isLoading,
    error,
  } = useFetch(`https://restcountries.com/v3.1/name/${name}`);

  return (
    <>
      <div className={theme}>
        <div className={`${styles.country_page} background`}>
          <div className={styles.back_btn}>
            <button className={styles.back_to_home}>
              <Link className={styles.remove_deco_lin} to="/">
                Back
              </Link>
            </button>
          </div>
          <div className={styles.flag_side}>
            <div className={styles.sub_flag_img}>
              {isLoading && "Loading..."}
              {error && error}
              {countryInfo && !isLoading && (
                <img
                  src={countryInfo[0].flags.png}
                  alt={countryInfo[0].flags.alt}
                />
              )}
            </div>
          </div>
          <div className={styles.country_details}>
            <div className={styles.country_name}>
              <p className={`${styles.para_for_country_nam} text`}>
                {!isLoading && countryInfo && (
                  <span>{countryInfo[0]?.name?.common}</span>
                )}
              </p>
            </div>

            <div className={styles.extra_info_country}>
              <div className={styles.info_left}>
                <ul className={styles.ul_left}>
                  <li className={`${styles.intro_element} text`}>
                    Population:{" "}
                    {isLoading
                      ? "Loading..."
                      : countryInfo && countryInfo[0]
                      ? countryInfo[0].population
                      : "N/A"}
                  </li>
                  <li className={`${styles.intro_element} text`}>
                    Region:{" "}
                    {isLoading
                      ? "Loading..."
                      : countryInfo?.[0]?.region ?? "N/A"}
                  </li>
                  <li className={`${styles.intro_element} text`}>
                    Sub Region:{" "}
                    {isLoading
                      ? "Loading..."
                      : countryInfo?.[0]?.subregion ?? "N/A"}
                  </li>
                  <li className={`${styles.intro_element} text`}>
                    Capital:{" "}
                    {isLoading
                      ? "Loading..."
                      : countryInfo?.[0]?.capital ?? "N/A"}
                  </li>
                </ul>
              </div>
              <div className={styles.info_right}>
                <ul className={styles.ul_right}>
                  <li className={`${styles.intro_element} text`}>
                    Top Level Domain:{" "}
                    {isLoading ? "Loading..." : countryInfo?.[0]?.tld ?? "N/A"}
                  </li>
                  <li className={`${styles.intro_element} text`}>
                    Languages:{" "}
                    {isLoading
                      ? "Loading..."
                      : Object.values(countryInfo?.[0]?.languages).join(", ")}
                  </li>
                  <li className={`${styles.intro_element} text`}>
                    Currencies:{" "}
                    {isLoading ? (
                      "Loading..."
                    ) : countryInfo?.[0]?.currencies ? (
                      Object.values(countryInfo[0].currencies).map(
                        (currency: any, index: number) => (
                          <span className={styles.currency_span} key={index}>
                            {currency.name}
                          </span>
                        )
                      )
                    ) : (
                      <span>No currency data available</span>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.border_countries}>
              <div className={styles.border_country_headline}>
                <p className={`${styles.p_border} text`}>Border : Countries</p>
              </div>
              <div className={styles.countries_names}>
                {isLoading && "Loading..."}
                {error && error}
                {countryInfo && !isLoading && (
                  <div className={styles.country_border}>
                    {countryInfo[0].borders &&
                    countryInfo[0].borders.length > 0 ? (
                      countryInfo[0].borders.map(
                        (border: string, key: number) => (
                          <span
                            className={`${styles.country_border_name} text`}
                            key={key}
                          >
                            {border}
                          </span>
                        )
                      )
                    ) : (
                      <span>No borders</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
