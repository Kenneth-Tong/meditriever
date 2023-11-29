import React from 'react'

import PropTypes from 'prop-types'

const Feature = (props) => {
  return (
    <div
      style={{
        gap: 'var(--dl-space-space-unit)',
        width: '100%',
        display: 'flex',
        maxWidth: '300px',
        position: 'relative',
        alignItems: 'flex-start',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          gap: 'var(--dl-space-space-unit)',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <img
          alt="image"
          src={props.Icon}
          style={{
            height: '22px',
            objectFit: 'cover',
          }}
        />
        <h3
          style={{
            color: '#ffffff',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: '700',
          }}
        >
          {props.Header}
        </h3>
      </div>
      <p
        style={{
          color: 'rgb(255, 255, 255)',
          fontSize: '18px',
          fontFamily: 'Karla',
          lineHeight: '27px',
        }}
      >
        {props.Description}
      </p>
    </div>
  )
}

Feature.defaultProps = {
  Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  Icon: '/thumbs-up.svg',
  Header: 'Hand Picked Guides',
}

Feature.propTypes = {
  Description: PropTypes.string,
  Icon: PropTypes.string,
  Header: PropTypes.string,
}

export default Feature
