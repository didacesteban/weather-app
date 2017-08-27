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
    let messageNoData = null;
    const creatingDataObject = dataSaved.forEach((array) => {
      dataMapped = _.concat(dataMapped, array);
    });
    if(localStorage.getItem("allData")){
      dataMapped = dataMapped.map(country => {
        return <tr key={country.id}>
            <td>{country.name}</td>
            <td>{country.temperature}°</td>
          </tr>
      });
    }else{
      messageNoData = <p className="text-center">"Sorry, You don't have data saved yet"</p>;
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
            <button className="btn btn-default" onClick={this.clearStorage.bind(this)}>clear data</button>
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
          </Col> : {messageNoData}
        }
      </Row>
    </div>
  }

}

export default connect(mapStateToProps)(AllData);
