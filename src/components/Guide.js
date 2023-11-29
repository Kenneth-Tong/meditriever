import React from 'react'

import PropTypes from 'prop-types'

const Guide = (props) => {
  return (
    <div
      style={{
        gap: 'var(--dl-space-space-oneandhalfunits)',
        width: '100%',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        alt="image"
        src={props.Portrait}
        style={{
          flex: '1',
          width: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          gap: 'var(--dl-space-space-halfunit)',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h3
          style={{
            color: '#352B2A',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '700',
          }}
        >
          {props.Name}
        </h3>
        <span
          style={{
            fontStyle: 'normal',
            fontWeight: '500',
          }}
        >
          {props.Location}
        </span>
      </div>
    </div>
  )
}

Guide.defaultProps = {
  Name: 'Miura Avaron',
  rootClassName: '',
  Portrait: '/guide-1.png',
  Location: 'Tokyo, Japan',
}

Guide.propTypes = {
  Name: PropTypes.string,
  rootClassName: PropTypes.string,
  Portrait: PropTypes.string,
  Location: PropTypes.string,
}

export default Guide
