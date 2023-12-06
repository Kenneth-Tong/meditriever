import React from 'react'

import PropTypes from 'prop-types'

import './location.css'

const Location = (props) => {
  return (
    <div className="location-item">
      <img alt="image" src={props.Background} className="location-background" />
      <div className="location-content">
        <span className="location-location">{props.Location}</span>
      </div>
    </div>
  )
}

Location.defaultProps = {
  Background: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  Location: 'Tokyo, Japan',
}

Location.propTypes = {
  Background: PropTypes.string,
  Location: PropTypes.string,
}

export default Location
