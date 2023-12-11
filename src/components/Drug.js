import React from 'react'

import PropTypes from 'prop-types'

import './drug.css'

const Drug = (props) => {
  return (
    <div className="drug-item">
      <img alt="image" src={props.Background} className="drug-background" />
      <div className="drug-content">
        <span className="drug-drug">{props.Drug}</span>
      </div>
    </div>
  )
}

Drug.defaultProps = {
  Background: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
}

Drug.propTypes = {
  Background: PropTypes.string,
  Drug: PropTypes.string,
}

export default Drug
