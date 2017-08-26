import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { fetchCountries } from "../actions/countriesActions"

function mapStateToProps(state) {
    return {
        countries: state.countries
    };
}

class Home extends Component {

  componentWillMount() {
    this.props.dispatch(fetchCountries())
  }

  fetchCountries() {
    this.props.dispatch(fetchCountries())
  }

  render() {
    const countriesInfo = this.props.countries.countries;
    if (!countriesInfo.length) {
      return <button onClick={this.fetchCountries.bind(this)}>load countries info</button>
    }
    const mappedInfo = countriesInfo.map(country => <li key={country.id}>{country.name}</li>)

    return <div>
      <h1>Dashboard</h1>
      <ul>{mappedInfo}</ul>
    </div>
  }

}

export default connect(mapStateToProps)(Home);
