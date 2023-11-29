import React from 'react'

import PropTypes from 'prop-types'

const Article = (props) => {
  return (
    <div
      style={{
        gap: 'var(--dl-space-space-oneandhalfunits)',
        width: '100%',
        display: 'flex',
        maxWidth: '500px',
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        alt="image"
        src={props.Image}
        style={{
          width: '100%',
          height: '375px',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          gap: 'var(--dl-space-space-threeunits)',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            gap: 'var(--dl-space-space-unit)',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2
            style={{
              color: 'rgb(53, 43, 42)',
              width: '100%',
              fontSize: '40px',
              maxWidth: '800px',
              fontStyle: 'normal',
              fontFamily: 'Cormorant Infant',
              fontWeight: '600',
              lineHeight: '60px',
            }}
          >
            {props.Header}
          </h2>
          <p
            style={{
              color: 'rgb(53, 43, 42)',
              maxWidth: '800px',
              fontFamily: 'Lora',
              lineHeight: '24px',
            }}
          >
            {props.Description}
          </p>
        </div>
        <button>
          <span
            style={{
              fontStyle: 'normal',
              fontWeight: '500',
            }}
          >
            Read more
          </span>
          <span
            style={{
              fontStyle: 'normal',
              fontWeight: '500',
            }}
          >
            &gt;
          </span>
        </button>
      </div>
    </div>
  )
}

Article.defaultProps = {
  rootClassName: '',
  Image: 'https://play.teleporthq.io/static/svg/default-img.svg',
  Header: 'Understand your customers',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

Article.propTypes = {
  rootClassName: PropTypes.string,
  Image: PropTypes.string,
  Header: PropTypes.string,
  Description: PropTypes.string,
}

export default Article
