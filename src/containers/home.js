import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { addTimeout } from 'redux-timeout'
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
    setTimeout(() => {
      this.props.dispatch(fetchCountries())
    }, 180000)
  }

  fetchCountries() {
    this.props.dispatch(fetchCountries())
  }

  render() {
    const countriesInfo = this.props.countries.countries;
    let countryTempreatureChart = "c100 center";
    if (!countriesInfo.length) {
      return <button onClick={this.fetchCountries.bind(this)}>load countries info</button>
    }
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
          Dashboard <small>weather updated at: </small>
        </PageHeader>
        <Row className="text-center">
          {mappedInfo}
        </Row>
      </Col>
    </div>
  }

}

export default connect(mapStateToProps)(Home);
