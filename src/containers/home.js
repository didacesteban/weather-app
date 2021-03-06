import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { fetchCountries } from "../actions/countriesActions"
import {Grid, Row, Col, PageHeader} from 'react-bootstrap'
import '../css/circle.css';
import '../css/style.css';

function mapStateToProps(state) {
    return {
        countries: state.countries
    };
}

class Home extends Component {

  componentWillMount() {
    this.props.dispatch(fetchCountries())
  }

  componentDidMount() {
    setInterval(() => {
      this.props.dispatch(fetchCountries())
    }, 180000);
  }

  fetchCountries() {
    this.props.dispatch(fetchCountries())
  }

  render() {
    const countriesInfo = this.props.countries.countries;
    let countryTempreatureChart = "c100 center";
    if (!countriesInfo.length) {
      return <Col xs={12} md={12} lg={12} className="text-center">
      <p>We are trying to get real time weather data but We are having some issues.</p>
      <p>Please be patient and click the button below to try again.</p>
      <button className="btn btn-default" onClick={this.fetchCountries.bind(this)}>Retry</button>
      </Col>
    }
    let lastUpdate = `${countriesInfo[countriesInfo.length-1].date}`;
    const mappedInfo = countriesInfo.map(country =>
      <Col xs={6} md={6} lg={3} key={country.id} className="country-container">
        <p>{country.name}</p>
        <div className={countryTempreatureChart + ` p${country.temperatureFormated} ${country.temperatureColor}`}>
            <span>{country.temperature}°</span>
            <div className="slice"><div className="bar"></div><div className="fill"></div></div>
        </div>
      </Col>
    );

    return <div className="container">
      <Col xs={12} md={12} lg={12}>
        <PageHeader>
          Dashboard <small className="custom-small">Last update: {lastUpdate}</small>
        </PageHeader>
        <Row className="text-center">
          {mappedInfo}
        </Row>
      </Col>
    </div>
  }

}

export default connect(mapStateToProps)(Home);
