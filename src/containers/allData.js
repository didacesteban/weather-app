import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { fetchCountries, clearData } from "../actions/countriesActions"
import {Grid, Row, Col, PageHeader} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
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
    let messageNoData = null;
    const creatingDataObject = dataSaved.forEach((array) => {
      dataMapped = _.concat(dataMapped, array);
    });
    if(localStorage.getItem("allData")){
      dataMapped = dataMapped.map((country, index) => {
        return <tr key={index}>
            <td>{country.name}</td>
            <td>{country.temperature}°</td>
          </tr>
      });
    }else{
      messageNoData = "Sorry, You don't have data saved yet";
    }

    return <div className="container">
      <Col xs={12} md={12} lg={12}>
        <PageHeader>
          All time data saved
        </PageHeader>
      </Col>
      <Row>
        { localStorage.getItem("allData") ?
          <Col xs={12} md={12} lg={12} className="text-left">
            <button className="btn btn-default" onClick={this.clearStorage.bind(this)}>
              <Link to="/">clear data</Link>
            </button>
            <table className="table table-striped table-allData-margin">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Temperature</th>
                </tr>
              </thead>
              <tbody>
                {dataMapped}
              </tbody>
            </table>
          </Col> : <p className="text-center">{messageNoData}</p> }
      </Row>
    </div>
  }

}

export default connect(mapStateToProps)(AllData);
