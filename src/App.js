import React, { Component } from "react";
//import Cards from "./components/Cards/Cards";
//import Charts from "./components/Chart/Chart";
//import CountryPicker from "./components/CountryPicker/CountryPicker";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
class App extends Component {
  state = {
    data: {},
    country: "",
  };
  // place to fetch data

  async componentDidMount() {
    const fetchdata = await fetchData();
    this.setState({ data: fetchdata });
  }
  handleCountryChange = async (country) => {
    const fetchdata = await fetchData(country);

    console.log(fetchdata);
    this.setState({ data: fetchdata, country: country });

    //fetch the data
    //set the state
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <h1>COVID-19 TRACKER</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />

        <Chart data={data} country={country} />
      </div>
    );
  }
}
export default App;
