import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ZipInput from "./components/ZipInput";
import CitiesCard from "./components/CitiesCard";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: null,
      zip: null,
    };
  }

  async componentDidMount() {
    if (this.state.zip) {
      return this.fetchCities(this.state.zip);
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmitZip = async (e) => {
    return this.fetchCities(this.state.zip);
  };

  fetchCities = (zip) => {
    Axios.get(`https://ctp-zip-api.herokuapp.com/zip/${zip}`)
      .then((res) => {
        if (res.data)
          this.setState({
            cities: res.data,
          });
      })
      .catch((error) => {
        this.setState({
          cities: "no results",
        });
      });
  };

  render() {
    console.log("cities", this.state.cities);
    console.log("zip", this.state.zip);

    return (
      <React.Fragment>
        <Navbar
          title="ZipSearch"
          cities={this.state.cities}
          zip={this.state.zip}
        />
        <ZipInput onChange={this.handleChange} onSubmit={this.onSubmitZip} />
        <CitiesCard cities={this.state.cities} />
      </React.Fragment>
    );
  }
}

export default App;
