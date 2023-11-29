import React from 'react'

import PropTypes from 'prop-types'

const Offer = (props) => {
  return (
    <div
      style={{
        gap: 'var(--dl-space-space-oneandhalfunits)',
        width: '100%',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
      }}
    >
      <img
        alt="image"
        src={props.Image}
        style={{
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          gap: 'var(--dl-space-space-oneandhalfunits)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            gap: 'var(--dl-space-space-unit)',
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <span
            style={{
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '700',
            }}
          >
            {props.Location}
          </span>
          <span
            style={{
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '500',
            }}
          >
            {props.Guides}
          </span>
        </div>
        <span
          style={{
            maxWidth: '400px',
            lineHeight: '24px',
          }}
        >
          {props.Description}
        </span>
      </div>
    </div>
  )
}

Offer.defaultProps = {
  Image: 'f8ae1ece-a597-4603-a6d6-066768a42c4c',
  Guides: '3 Local guides',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  Location: 'Crete, Greece',
}

Offer.propTypes = {
  Image: PropTypes.string,
  Guides: PropTypes.string,
  Description: PropTypes.string,
  Location: PropTypes.string,
}

export default Offer
