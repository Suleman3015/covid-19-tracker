import React from "react";
import { render } from "react-dom";
import Cards from "./components/Cards/Cards";
import Msg from "./components/message";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";
import styles from "./app.module.css";
import { fetchData } from "./api";

import Navbar from "./components/NavBar";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div>
        <Navbar />
        <div className={styles.container}>
          <img className={styles.image} src={Image} />
          <Msg />
          <Cards data={data} />

          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      </div>
    );
  }
}

export default App;
