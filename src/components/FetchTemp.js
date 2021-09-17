import React from "react";

export default class FetchTemp extends React.Component {
  state = {
    loading: true,
    temp: null,
  };

  async componentDidMount() {
    const url =
      "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.9139&lon=10.7522";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ temp: data.properties, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.temp) {
      return <div>didn't find air_temperature</div>;
    }
    var aften = CurrentTime();
    for (var i = 0; i < 81; i++) {
      if (this.state.temp.timeseries[i].time == aften) {
        /*  var javel =
          this.state.person.timeseries[i].data.instant.details.air_temperature;
        return javel;*/
        return (
          <div>
            <div>
              air_temperature next hour:
              {
                this.state.temp.timeseries[i].data.instant.details
                  .air_temperature
              }
              C
            </div>
          </div>
        );
      }
    }
  }
}

function CurrentTime() {
  var myCurrentDate = new Date();
  var date =
    myCurrentDate.getFullYear() +
    "-0" +
    (myCurrentDate.getMonth() + 1) +
    "-" +
    myCurrentDate.getDate() +
    "T" +
    myCurrentDate.getHours() +
    ":" +
    "00" +
    ":" +
    "00Z";
  return date;
}
