import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import CardCountry from "./Components/Result/CountryCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryPage from "./Components/CountryPage";

interface Country {
  name: {
    common: string;
  };
  region: string;
}

interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
    // Add other flag properties if necessary
  };
  population: number;
  region: string;
  capital: string;
  // Add other properties as needed
}

function App() {
  // DARK MODE THEME
  const [theme, setTheme] = useState("light");

  // FUNCTION TO TOGGLE BTW LIGHT AND DARk
  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // console.log(theme);

  const [countryinfo, Setcountryinfo] = useState<Country[]>([]);
  const [originalcountryinfo, setOriginalcountryinfo] = useState<Country[]>([]);

  // INPUT [FOR FILTER BY COUNTRY]
  const [userValue, setUservalue] = useState("");
  // SELECT [FOR FILTER BY REGION]
  const [selectValue, setSelectValue] = useState("");

  // CALLBACKFUNCTION
  const dataUser = (value: string) => {
    setUservalue(value);
  };

  // CALLBACKFUNCTION FOR SELECT VALUE
  const slectUser = (valueSelect: string) => {
    setSelectValue(valueSelect);
  };

  // console.log(userValue);
  // console.log(selectValue);

  useEffect(() => {
    const countriesApi = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      Setcountryinfo(data);
      setOriginalcountryinfo(data);
      console.log(data);
    };

    countriesApi();
  }, []);

  // USE USEEFFCT
  useEffect(() => {
    if (userValue === "") {
      Setcountryinfo(originalcountryinfo);
    } else {
      const filtercountry = countryinfo.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(userValue.toLowerCase());
      });
      Setcountryinfo(filtercountry);
    }
  }, [userValue, originalcountryinfo]);

  // USEFEECT FILTER BY REGION
  useEffect(() => {
    if (selectValue === "") {
      Setcountryinfo(originalcountryinfo);
    } else {
      const filteredRegion = originalcountryinfo.filter((country) => {
        return country.region
          .toLowerCase()
          .startsWith(selectValue.toLowerCase());
      });
      Setcountryinfo(filteredRegion);
    }
  }, [selectValue, originalcountryinfo]);

  return (
    <>
      <BrowserRouter>
        <Navbar themeHandler={themeHandler} theme={theme} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <Navbar themeHandler={themeHandler} theme={theme} /> */}
                <Filter
                  value={dataUser}
                  valueSelect={slectUser}
                  theme={theme}
                />
                <div className={`${theme}`}>
                  <div className="background main_container">
                    {countryinfo.length > 0 ? (
                      countryinfo
                        .slice(0, 8)
                        .map((obj, key) => (
                          <CardCountry theme={theme} key={key} obj={obj} />
                        ))
                    ) : (
                      <h1>No Country Found! 🥺</h1>
                    )}
                  </div>
                </div>
              </>
            }
          />
          <Route path="/:name" element={<CountryPage theme={theme} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
