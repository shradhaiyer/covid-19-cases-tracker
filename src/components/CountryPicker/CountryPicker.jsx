import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountry } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountry, setFethchedCountry] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setFethchedCountry(await fetchCountry());
    };
    fetchCountries();
  }, [setFethchedCountry]);
  console.log(fetchedCountry);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <opion value="global">Global</opion>
        {fetchedCountry.map((country, i) => (
          <option value={country} key={i}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
