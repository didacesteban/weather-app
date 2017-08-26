import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { addTimeout } from 'redux-timeout'
import { fetchCountries } from "../actions/countriesActions"
import {Grid, Row, Col, PageHeader} from 'react-bootstrap'
import '../css/circle.css';
import '../css/style.css';


class AllData extends Component {

  render() {
    return <div className="container">
      <Col xs={12} md={12} lg={12}>
        <PageHeader>
          All time data saved
        </PageHeader>
        <Row className="text-center">

        </Row>
      </Col>
    </div>
  }

}

export default connect(mapStateToProps)(AllData);
