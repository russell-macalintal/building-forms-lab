import React, { Component } from 'react'
import BandInput from '../components/BandInput.js'
import { connect } from 'react-redux';

class BandsContainer extends Component {
  renderBands = () => {
    return (
      this.props.bands.map((band, idx) => (
        <li key={idx}>{band.name}</li>
    ))
    )
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (payload) => dispatch({type: "ADD_BAND", band: payload})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
