import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { fetchCountries, clearData } from "../actions/countriesActions"
import {Grid, Row, Col, PageHeader} from 'react-bootstrap'
import '../css/circle.css';
import '../css/style.css';
const _ = require('lodash');

function mapStateToProps(state) {
    return {
        countries: state.countries
    };
}

class AllData extends Component {

  clearStorage() {
    this.props.dispatch(clearData())
  }

  render() {
    const dataSaved = JSON.parse(`[${localStorage.getItem("allData")}]`);
    let dataMapped = [];
    const creatingDataObject = dataSaved.forEach((array) => {
      dataMapped = _.concat(dataMapped, array);
    });
    dataMapped = dataMapped.map(country => {
      return <p>{country.name}</p>
    });
    return <div className="container">
      <Col xs={12} md={12} lg={12}>
        <PageHeader>
          All time data saved <button onClick={this.clearStorage.bind(this)}>clear data</button>
        </PageHeader>
      </Col>
      <Row className="text-center">
        {dataMapped}
      </Row>
    </div>
  }

}

export default connect(mapStateToProps)(AllData);
