import React from 'react'

import PropTypes from 'prop-types'

const Location = (props) => {
  return (
    <div
      style={{
        flex: '1',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <img
        alt="image"
        src={props.Background}
        style={{
          flex: '1',
          height: '400px',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          top: '0px',
          flex: '1',
          left: '0px',
          right: '0px',
          bottom: '0px',
          height: '100%',
          margin: 'auto',
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: '#ffffff',
            fontSize: '20px',
            fontStyle: 'normal',
            textAlign: 'center',
            fontWeight: '700',
          }}
        >
          {props.Location}
        </span>
      </div>
    </div>
  )
}

Location.defaultProps = {
  Background: '/destination-1-400h.png',
  Location: 'Tokyo, Japan',
}

Location.propTypes = {
  Background: PropTypes.string,
  Location: PropTypes.string,
}

export default Location
