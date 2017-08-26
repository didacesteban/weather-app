import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Menu = () => (
  <div>
    <Grid>
      <Row className="menu-dashboard-weather">
        <Col xs={12} md={12} lg={12} className="text-left">
          <Link to="/" className="menu-dashboard-weather-button">DASHBOARD</Link>
          <Link to="/allData" className="menu-dashboard-weather-button">ALL TIME DATA</Link>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Menu;
