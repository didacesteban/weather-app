import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
require('../scss/style.scss');

const Menu = () => (
  <div>
    <Grid>
      <Row>
        <Col xs={6} md={6} lg={6} className="text-center">
          <Link to="/">Weather dashboard</Link>
        </Col>
        <Col xs={6} md={6} lg={6} className="text-center">
          <li><Link to="/">All data</Link></li>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Menu;
