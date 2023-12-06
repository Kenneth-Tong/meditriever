import React from 'react'

import PropTypes from 'prop-types'

import './guide.css'

const Guide = (props) => {
  return (
    <div className={`guide-guide ${props.rootClassName} `}>
      <img alt="image" src={props.Portrait} className="guide-portrait" />
      <div className="guide-details">
        <h3 className="guide-name">{props.Name}</h3>
        <span className="guide-location">{props.Location}</span>
      </div>
    </div>
  )
}

Guide.defaultProps = {
  Name: 'Miura Avaron',
  rootClassName: '',
  Portrait: '/Guides/guide-1.png',
  Location: 'Tokyo, Japan',
}

Guide.propTypes = {
  Name: PropTypes.string,
  rootClassName: PropTypes.string,
  Portrait: PropTypes.string,
  Location: PropTypes.string,
}

export default Guide
