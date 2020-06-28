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

  //if zip provided, call api function
  async componentDidMount() {
    if (this.state.zip) {
      return this.fetchCities(this.state.zip);
    }
  }

  //handle input field for zip
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  //on zip sub,it, call api function
  onSubmitZip = async (e) => {
    return this.fetchCities(this.state.zip);
  };

  //api function to fetch by zip parameter
  fetchCities = (zip) => {
    Axios.get(`https://ctp-zip-api.herokuapp.com/zip/${zip}`)
      .then((res) => {
        //if success, set state to data
        if (res.data)
          this.setState({
            cities: res.data,
          });
      })
      .catch((error) => {
        //if error, set state to error
        this.setState({
          cities: "no results",
        });
      });
  };

  render() {
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
