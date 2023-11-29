import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import Feature from './Feature'
import Offer from './Offer'
import Location from './Location'
import Guide from './Guide'
import Article from './Article'

const Home = (props) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        minHeight: '100vh',
        overflowX: 'hidden',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <section
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            flex: '1',
            width: '100%',
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            paddingLeft: 'var(--dl-space-space-fiveunits)',
            paddingRight: 'var(--dl-space-space-fiveunits)',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              top: '0px',
              left: '0px',
              right: '0px',
              width: '100%',
              bottom: '0px',
              height: '100%',
              margin: 'auto',
              display: 'flex',
              overflow: 'hidden',
              position: 'absolute',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                top: '0px',
                left: '0px',
                right: '0px',
                width: '100%',
                bottom: '0px',
                height: '100%',
                margin: 'auto',
                display: 'flex',
                position: 'absolute',
                alignItems: 'flex-start',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'rgba(208, 206, 206, 0.4)',
              }}
            >
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1624204921625-49bb8dce6730?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQyfHxtZWRpY2luZXN8ZW58MHx8fHwxNzAxMTM3NjY4fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                style={{
                  width: '100%',
                  height: '848px',
                  opacity: '0.35',
                  objectFit: 'cover',
                }}
              />
              <svg
                viewBox="0 0 1024 1024"
                style={{
                  width: '24px',
                  height: '24px',
                }}
              >
                <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                style={{
                  width: '24px',
                  height: '24px',
                }}
              >
                <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                style={{
                  width: '24px',
                  height: '24px',
                }}
              >
                <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                style={{
                  width: '24px',
                  height: '24px',
                }}
              >
                <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                style={{
                  width: '24px',
                  height: '24px',
                }}
              >
                <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
              </svg>
            </div>
          </div>
          <div
            style={{
              flex: '1',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <header
              data-thq="thq-navbar"
              style={{
                width: '100%',
                display: 'flex',
                maxWidth: '1440px',
                position: 'relative',
                alignItems: 'center',
                paddingTop: 'var(--dl-space-space-threeunits)',
                paddingBottom: 'var(--dl-space-space-threeunits)',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  flex: '0 0 auto',
                  width: '100%',
                  height: 'auto',
                  display: 'flex',
                  alignItems: 'space-between',
                  flexDirection: 'column',
                }}
              >
                <header
                  data-thq="thq-navbar"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: 'var(--dl-space-space-twounits)',
                    paddingLeft: 'var(--dl-space-space-threeunits)',
                    paddingRight: 'var(--dl-space-space-threeunits)',
                    paddingBottom: 'var(--dl-space-space-twounits)',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    data-thq="thq-navbar-nav"
                    style={{
                      flex: '1',
                      display: 'flex',
                      position: 'relative',
                      justifyContent: 'space-between',
                    }}
                  >
                    <img
                      alt="image"
                      src="/mediritriever_logo_ideas-removebg-preview-300w.png"
                      style={{
                        width: '249px',
                        height: '165px',
                        objectFit: 'cover',
                      }}
                    />
                    <svg
                      viewBox="0 0 1024 1024"
                      style={{
                        top: '64px',
                        fill: '#1b9ce4',
                        left: '1098px',
                        width: '40px',
                        height: '40px',
                        position: 'absolute',
                      }}
                    >
                      <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
                    </svg>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <button
                        type="button"
                        style={{
                          color: '#fffefe',
                          borderWidth: '0px',
                          marginRight: 'var(--dl-space-space-twounits)',
                          backgroundColor: '#1b9ce4',
                        }}
                      >
                        Login
                      </button>
                      <button
                        type="button"
                        style={{
                          color: '#ffffff',
                          borderWidth: '0px',
                          backgroundColor: '#1b9ce4',
                        }}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                  <div
                    data-thq="thq-burger-menu"
                    style={{
                      display: 'none',
                    }}
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      style={{
                        width: 'var(--dl-size-size-xsmall)',
                        height: 'var(--dl-size-size-xsmall)',
                      }}
                    >
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div
                    data-thq="thq-mobile-menu"
                    style={{
                      top: '0px',
                      left: '0px',
                      width: '100%',
                      height: '100vh',
                      zIndex: '100',
                      display: 'none',
                      padding: '32px',
                      position: 'absolute',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      backgroundColor: '#fff',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: 'var(--dl-space-space-threeunits)',
                          justifyContent: 'space-between',
                        }}
                      >
                        <img
                          alt="image"
                          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                          style={{
                            height: '2rem',
                          }}
                        />
                        <div
                          data-thq="thq-close-menu"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            style={{
                              width: 'var(--dl-size-size-xsmall)',
                              height: 'var(--dl-size-size-xsmall)',
                            }}
                          >
                            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                          </svg>
                        </div>
                      </div>
                      <nav
                        style={{
                          flex: '0 0 auto',
                          display: 'flex',
                          alignSelf: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                        }}
                      >
                        <span
                          style={{
                            marginBottom: 'var(--dl-space-space-unit)',
                          }}
                        >
                          About
                        </span>
                        <span
                          style={{
                            marginBottom: 'var(--dl-space-space-unit)',
                          }}
                        >
                          Features
                        </span>
                        <span
                          style={{
                            marginBottom: 'var(--dl-space-space-unit)',
                          }}
                        >
                          Pricing
                        </span>
                        <span
                          style={{
                            marginBottom: 'var(--dl-space-space-unit)',
                          }}
                        >
                          Team
                        </span>
                        <span
                          style={{
                            marginBottom: 'var(--dl-space-space-unit)',
                          }}
                        >
                          Blog
                        </span>
                      </nav>
                      <div
                        style={{
                          display: 'flex',
                          marginTop: 'var(--dl-space-space-unit)',
                          alignItems: 'center',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                      >
                        <button
                          style={{
                            marginRight: 'var(--dl-space-space-twounits)',
                          }}
                        >
                          Login
                        </button>
                        <button>Register</button>
                      </div>
                    </div>
                    <div>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        style={{
                          width: 'var(--dl-size-size-xsmall)',
                          height: 'var(--dl-size-size-xsmall)',
                          marginRight: 'var(--dl-space-space-twounits)',
                        }}
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        style={{
                          width: 'var(--dl-size-size-xsmall)',
                          height: 'var(--dl-size-size-xsmall)',
                          marginRight: 'var(--dl-space-space-twounits)',
                        }}
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        style={{
                          width: 'var(--dl-size-size-xsmall)',
                          height: 'var(--dl-size-size-xsmall)',
                        }}
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </div>
                  </div>
                </header>
              </div>
              <div
                data-thq="thq-burger-menu"
                style={{
                  gap: 'var(--dl-space-space-twounits)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <button
                  style={{
                    cursor: 'pointer',
                    display: 'none',
                    padding: 'var(--dl-space-space-unit)',
                    aspectRatio: '1',
                    borderWidth: '0px',
                    borderRadius: 'var(--dl-radius-radius-round)',
                    flexDirection: 'row',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    style={{
                      fill: '#ffffff',
                      width: 'var(--dl-size-size-xsmall)',
                      height: 'var(--dl-size-size-xsmall)',
                    }}
                  >
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </button>
              </div>
              <div
                data-thq="thq-mobile-menu"
                style={{
                  top: '0px',
                  left: '0px',
                  width: '100%',
                  height: '100vh',
                  zIndex: '1000',
                  display: 'none',
                  padding: '32px',
                  position: 'fixed',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#fff',
                }}
              >
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: 'var(--dl-space-space-threeunits)',
                      justifyContent: 'space-between',
                    }}
                  >
                    <img
                      alt="logo"
                      src="/logo.svg"
                      style={{
                        height: '33px',
                      }}
                    />
                    <div
                      data-thq="thq-close-menu"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        style={{
                          width: 'var(--dl-size-size-xsmall)',
                          height: 'var(--dl-size-size-xsmall)',
                        }}
                      >
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    style={{
                      flex: '0 0 auto',
                      display: 'flex',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                    }}
                  >
                    <span
                      style={{
                        marginBottom: 'var(--dl-space-space-unit)',
                      }}
                    >
                      About
                    </span>
                    <span
                      style={{
                        marginBottom: 'var(--dl-space-space-unit)',
                      }}
                    >
                      Features
                    </span>
                    <span
                      style={{
                        marginBottom: 'var(--dl-space-space-unit)',
                      }}
                    >
                      Pricing
                    </span>
                    <span
                      style={{
                        marginBottom: 'var(--dl-space-space-unit)',
                      }}
                    >
                      Team
                    </span>
                    <span
                      style={{
                        marginBottom: 'var(--dl-space-space-unit)',
                      }}
                    >
                      Blog
                    </span>
                  </nav>
                  <div
                    style={{
                      flex: '0 0 auto',
                      width: 'auto',
                      display: 'flex',
                      marginTop: 'var(--dl-space-space-unit)',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}
                  >
                    <button
                      style={{
                        marginRight: 'var(--dl-space-space-twounits)',
                      }}
                    >
                      Login
                    </button>
                    <button>Register</button>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    style={{
                      width: 'var(--dl-size-size-xsmall)',
                      height: 'var(--dl-size-size-xsmall)',
                      marginRight: 'var(--dl-space-space-twounits)',
                    }}
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    style={{
                      width: 'var(--dl-size-size-xsmall)',
                      height: 'var(--dl-size-size-xsmall)',
                      marginRight: 'var(--dl-space-space-twounits)',
                    }}
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    style={{
                      width: 'var(--dl-size-size-xsmall)',
                      height: 'var(--dl-size-size-xsmall)',
                    }}
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
            <div
              style={{
                gap: 'var(--dl-space-space-threeunits)',
                width: '100%',
                height: '100%',
                zIndex: '100',
                display: 'flex',
                maxWidth: '900px',
                position: 'relative',
                alignItems: 'center',
                borderColor: 'var(--dl-color-gray-black)',
                borderWidth: '0px',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <h1
                style={{
                  top: '50px',
                  left: '264px',
                  color: '#1b9ce4',
                  fontSize: '90px',
                  position: 'absolute',
                  fontStyle: 'normal',
                  textAlign: 'center',
                  fontFamily: '"Cormorant Infant"',
                  fontWeight: '700',
                  lineHeight: '90px',
                }}
              >
                Meditriever
              </h1>
              <div
                style={{
                  gap: 'var(--dl-space-space-oneandhalfunits)',
                  width: '100%',
                  display: 'flex',
                  maxWidth: '900px',
                  position: 'relative',
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <p
                  style={{
                    top: '-91px',
                    left: '282px',
                    color: 'rgb(91, 144, 187)',
                    fontSize: '18px',
                    maxWidth: '600px',
                    position: 'absolute',
                    textAlign: 'center',
                    fontFamily: '"Karla"',
                    lineHeight: '27px',
                  }}
                >
                  Fetch, retrieve, and store medications you need.   
                </p>
              </div>
              <div
                style={{
                  top: '209px',
                  left: '139px',
                  width: '100%',
                  border: '2px dashed rgba(120, 120, 120, 0.4)',
                  display: 'flex',
                  maxWidth: '700px',
                  position: 'absolute',
                  alignItems: 'center',
                  borderColor: '#1b9ce4',
                  borderWidth: '4px',
                  borderRadius: '50px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              ></div>
              <div
                style={{
                  flex: '0 0 auto',
                  width: 'auto',
                  height: 'auto',
                  display: 'flex',
                  position: 'relative',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}
              >
                <a
                  href="#new"
                  style={{
                    top: '7px',
                    left: '-194px',
                    color: 'var(--dl-color-gray-500)',
                    position: 'absolute',
                    textDecoration: 'none',
                  }}
                >
                  New
                </a>
                <div
                  style={{
                    flex: '0 0 auto',
                    width: 'auto',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      flex: '0 0 auto',
                      width: '200px',
                      display: 'flex',
                      position: 'relative',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                    }}
                  >
                    <div
                      style={{
                        gap: 'var(--dl-space-space-threeunits)',
                        top: '0px',
                        left: '0px',
                        border: '2px dashed rgba(120, 120, 120, 0.4)',
                        display: 'flex',
                        position: 'absolute',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <a
                href="#about"
                style={{
                  top: '285px',
                  color: 'var(--dl-color-gray-500)',
                  right: '102px',
                  fontSize: '32px',
                  position: 'absolute',
                  fontFamily: '"Cormorant Infant"',
                  fontWeight: '700',
                  textDecoration: 'none',
                }}
              >
                About
              </a>
              <a
                href="#new"
                style={{
                  color: '#ffffff',
                  right: '315px',
                  bottom: '121px',
                  position: 'absolute',
                  borderWidth: '0px',
                  borderRadius: '56px',
                  textDecoration: 'none',
                  backgroundColor: '#1b9ce4',
                }}
              >
                Explore the closest stores.
              </a>
              <a
                href="#new"
                style={{
                  top: '352px',
                  left: '87px',
                  color: '#ffffff',
                  position: 'absolute',
                  borderWidth: '0px',
                  borderRadius: '56px',
                  textDecoration: 'none',
                  backgroundColor: '#1b9ce4',
                }}
              >
                Add a New Prescription
              </a>
              <a
                href="#new"
                style={{
                  top: '349px',
                  color: '#ffffff',
                  right: '53px',
                  position: 'absolute',
                  borderWidth: '0px',
                  borderRadius: '56px',
                  textDecoration: 'none',
                  backgroundColor: '#1b9ce4',
                }}
              >
                Learn more about us!
              </a>
              <a
                href="#explore"
                style={{
                  top: '287px',
                  left: '427px',
                  color: 'var(--dl-color-gray-500)',
                  fontSize: '32px',
                  position: 'absolute',
                  fontFamily: '"Cormorant Infant"',
                  fontWeight: '700',
                  lineHeight: '1.15',
                  textTransform: 'none',
                  textDecoration: 'none',
                }}
              >
                Explore
              </a>
            </div>
          </div>
        </div>
        <div
          id="features"
          style={{
            width: '100%',
            zIndex: '100',
            display: 'flex',
            alignItems: 'center',
            paddingTop: 'var(--dl-space-space-threeunits)',
            paddingLeft: 'var(--dl-space-space-fiveunits)',
            paddingRight: 'var(--dl-space-space-fiveunits)',
            flexDirection: 'row',
            paddingBottom: 'var(--dl-space-space-threeunits)',
            justifyContent: 'center',
            backgroundColor: '#1b9ce4',
          }}
        >
          <div
            style={{
              gap: '140px',
              width: '100%',
              display: 'flex',
              maxWidth: '1440px',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Feature
              Icon="/headset.svg"
              Header="Questions? Email us!"
              Description="meditriever@gmail.com"
            ></Feature>
          </div>
        </div>
      </section>
      <section
        id="new"
        style={{
          gap: 'var(--dl-space-space-fourunits)',
          width: '100%',
          display: 'flex',
          maxWidth: '1440px',
          alignItems: 'center',
          paddingTop: '120px',
          paddingLeft: 'var(--dl-space-space-fiveunits)',
          paddingRight: 'var(--dl-space-space-fiveunits)',
          flexDirection: 'column',
          paddingBottom: '120px',
        }}
      >
        <div
          style={{
            gap: 'var(--dl-space-space-fiveunits)',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              gap: 'var(--dl-space-space-oneandhalfunits)',
              width: '100%',
              display: 'flex',
              maxWidth: '900px',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h2
              style={{
                color: '#1b9ce4',
                fontSize: '60px',
                fontStyle: 'normal',
                textAlign: 'center',
                fontFamily: '"Cormorant Infant"',
                fontWeight: '700',
                lineHeight: '60px',
              }}
            >
              Popular Prescriptions
            </h2>
          </div>
          <div
            style={{
              gap: 'var(--dl-space-space-unit)',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <button
              style={{
                padding: 'var(--dl-space-space-unit)',
                transition: '0.3s',
                aspectRatio: '1',
                borderWidth: '0px',
                borderRadius: 'var(--dl-radius-radius-round)',
                backgroundColor: '#1b9ce4',
              }}
            >
              All
            </button>
            <button>Popular</button>
            <button>Featured</button>
            <button>Trending</button>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridGap: 'var(--dl-space-space-threeunits)',
            alignItems: 'center',
            flexDirection: 'column',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          }}
        >
          <Link to="/home">
            <div
              style={{
                width: '100%',
                display: 'flex',
                textDecoration: 'none',
              }}
            >
              <Offer
                Image="https://images.unsplash.com/photo-1632067694852-8386d261115a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHR5bGVub2x8ZW58MHx8fHwxNzAxMTM4MDE4fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                Guides="Two common side-effects"
                Location="Tylenol"
                Description="Usually taken for pain relief."
              ></Offer>
            </div>
          </Link>
          <Link to="/home">
            <div
              style={{
                width: '100%',
                display: 'flex',
                textDecoration: 'none',
              }}
            >
              <Offer
                Image="https://images.unsplash.com/photo-1675521005096-729123cd1dc8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGFkZGVyYWxsfGVufDB8fHx8MTcwMTEzODA0NXww&amp;ixlib=rb-4.0.3&amp;w=1500"
                Guides="x common side-effects"
                Location="Adderall"
              ></Offer>
            </div>
          </Link>
          <Link to="/home">
            <div
              style={{
                width: '100%',
                display: 'flex',
                textDecoration: 'none',
              }}
            >
              <Offer
                Image="https://images.unsplash.com/photo-1544991936-9464fa9919d2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ2fHxtZWRpY2luZXxlbnwwfHx8fDE3MDExMzg2OTB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                Guides="x common side-effects"
                Location="Prozac"
              ></Offer>
            </div>
          </Link>
          <Link to="/home">
            <div
              style={{
                width: '100%',
                border: '2px dashed rgba(120, 120, 120, 0.4)',
                display: 'flex',
                textDecoration: 'none',
              }}
            ></div>
          </Link>
          <Link to="/home">
            <div
              style={{
                width: '100%',
                border: '2px dashed rgba(120, 120, 120, 0.4)',
                display: 'flex',
                textDecoration: 'none',
              }}
            ></div>
          </Link>
          <Link to="/home">
            <div
              style={{
                width: '100%',
                border: '2px dashed rgba(120, 120, 120, 0.4)',
                display: 'flex',
                textDecoration: 'none',
              }}
            ></div>
          </Link>
          <Link to="/home">
            <div
              style={{
                width: '100%',
                border: '2px dashed rgba(120, 120, 120, 0.4)',
                display: 'flex',
                textDecoration: 'none',
              }}
            ></div>
          </Link>
          <Link to="/home">
            <div
              style={{
                width: '100%',
                border: '2px dashed rgba(120, 120, 120, 0.4)',
                display: 'flex',
                textDecoration: 'none',
              }}
            ></div>
          </Link>
          <Link to="/home">
            <div
              style={{
                width: '100%',
                border: '2px dashed rgba(120, 120, 120, 0.4)',
                display: 'flex',
                textDecoration: 'none',
              }}
            ></div>
          </Link>
        </div>
        <div
          style={{
            gap: 'var(--dl-space-space-threeunits)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <button
            style={{
              display: 'flex',
              paddingLeft: 'var(--dl-space-space-oneandhalfunits)',
              paddingRight: 'var(--dl-space-space-oneandhalfunits)',
              flexDirection: 'row',
            }}
          >
            <svg
              viewBox="0 0 1024 1024"
              style={{
                width: '24px',
                height: '24px',
                display: 'none',
              }}
            >
              <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
            <span>Previous</span>
          </button>
          <div
            style={{
              gap: 'var(--dl-space-space-oneandhalfunits)',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                gap: 'var(--dl-space-space-halfunit)',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <div
                style={{
                  borderColor: 'rgba(0, 0, 0, 0)',
                  backgroundColor: '#1b9ce4',
                }}
              >
                <span
                  style={{
                    fontStyle: 'normal',
                    textAlign: 'center',
                    fontWeight: '500',
                  }}
                >
                  1
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontStyle: 'normal',
                    textAlign: 'center',
                    fontWeight: '500',
                  }}
                >
                  2
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontStyle: 'normal',
                    textAlign: 'center',
                    fontWeight: '500',
                  }}
                >
                  3
                </span>
              </div>
            </div>
            <img
              alt="image"
              src="/more.svg"
              style={{
                width: '17px',
                objectFit: 'cover',
              }}
            />
            <div>
              <span
                style={{
                  fontStyle: 'normal',
                  textAlign: 'center',
                  fontWeight: '500',
                }}
              >
                12
              </span>
            </div>
          </div>
          <button
            style={{
              display: 'flex',
              paddingLeft: 'var(--dl-space-space-oneandhalfunits)',
              paddingRight: 'var(--dl-space-space-oneandhalfunits)',
              flexDirection: 'row',
            }}
          >
            <span>Next</span>
            <svg
              viewBox="0 0 1024 1024"
              style={{
                width: '24px',
                height: '24px',
                display: 'none',
              }}
            >
              <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
            </svg>
          </button>
        </div>
      </section>
      <section
        id="how-it-works"
        style={{
          gap: '220px',
          width: '100%',
          display: 'flex',
          maxWidth: '1440px',
          alignItems: 'center',
          paddingTop: '170px',
          paddingLeft: 'var(--dl-space-space-fiveunits)',
          paddingRight: 'var(--dl-space-space-fiveunits)',
          flexDirection: 'column',
          paddingBottom: '160px',
        }}
      >
        <div
          style={{
            gap: '120px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <div
            style={{
              gap: 'var(--dl-space-space-threeunits)',
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <div
              style={{
                gap: 'var(--dl-space-space-oneandhalfunits)',
                width: '100%',
                display: 'flex',
                maxWidth: '500px',
                alignItems: 'flex-start',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <h2
                style={{
                  color: 'rgb(53, 43, 42)',
                  fontSize: '60px',
                  fontStyle: 'normal',
                  textAlign: 'left',
                  fontFamily: '"Cormorant Infant"',
                  fontWeight: '700',
                  lineHeight: '60px',
                }}
              >
                New User? 
              </h2>
              <p
                style={{
                  color: 'rgb(53, 43, 42)',
                  fontSize: '18px',
                  maxWidth: '600px',
                  textAlign: 'left',
                  fontFamily: '"Karla"',
                  lineHeight: '27px',
                }}
              >
                Here&apos;s some useful tips.
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
          <div
            style={{
              display: 'flex',
              position: 'relative',
              alignItems: 'flex-end',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '511px',
                border: '2px dashed rgba(120, 120, 120, 0.4)',
                height: '677px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundSize: 'cover',
                justifyContent: 'center',
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1504711331083-9c895941bf81?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGluZm9ybWF0aW9ufGVufDB8fHx8MTcwMTEzOTAzMnww&ixlib=rb-4.0.3&w=1500")',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              style={{
                right: '-463px',
                width: '530px',
                border: '2px dashed rgba(120, 120, 120, 0.4)',
                bottom: '-25px',
                height: '645px',
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#1b9ce4',
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            gap: 'var(--dl-space-space-fiveunits)',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <div
            style={{
              height: '530px',
              display: 'flex',
              overflow: 'hidden',
              position: 'relative',
              alignItems: 'flex-end',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <img
              alt="image"
              src="/highlight-2-1500w.png"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <div
            style={{
              gap: 'var(--dl-space-space-threeunits)',
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <div
              style={{
                gap: 'var(--dl-space-space-oneandhalfunits)',
                width: '100%',
                display: 'flex',
                maxWidth: '500px',
                alignItems: 'flex-start',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <h2
                style={{
                  color: 'rgb(53, 43, 42)',
                  fontSize: '60px',
                  fontStyle: 'normal',
                  textAlign: 'left',
                  fontFamily: 'Cormorant Infant',
                  fontWeight: '700',
                  lineHeight: '60px',
                }}
              >
                Excepteur sint occaecat cupidatat non proident
              </h2>
              <p
                style={{
                  color: 'rgb(53, 43, 42)',
                  fontSize: '18px',
                  maxWidth: '600px',
                  textAlign: 'left',
                  fontFamily: 'Karla',
                  lineHeight: '27px',
                }}
              >
                <span>
                  Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </span>
                <br></br>
                <br></br>
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
                <br></br>
              </p>
            </div>
            <button
              style={{
                fontStyle: 'normal',
                fontWeight: '500',
                paddingTop: 'var(--dl-space-space-unit)',
                transition: '0.3s',
                borderWidth: '0px',
                paddingLeft: 'var(--dl-space-space-oneandhalfunits)',
                borderRadius: '56px',
                paddingRight: 'var(--dl-space-space-oneandhalfunits)',
                paddingBottom: 'var(--dl-space-space-unit)',
                backgroundColor: 'rgb(250, 216, 122)',
              }}
            >
              Find a local guide
            </button>
          </div>
        </div>
      </section>
      <section
        id="explore"
        style={{
          gap: 'var(--dl-space-space-fourunits)',
          width: '100%',
          display: 'flex',
          maxWidth: '1440px',
          alignItems: 'center',
          paddingLeft: 'var(--dl-space-space-fiveunits)',
          paddingRight: 'var(--dl-space-space-fiveunits)',
          flexDirection: 'column',
          paddingBottom: 'var(--dl-space-space-fourunits)',
        }}
      >
        <div
          style={{
            gap: 'var(--dl-space-space-fiveunits)',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              gap: 'var(--dl-space-space-oneandhalfunits)',
              width: '100%',
              display: 'flex',
              maxWidth: '900px',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h2
              style={{
                color: 'rgb(53, 43, 42)',
                fontSize: '60px',
                fontStyle: 'normal',
                textAlign: 'center',
                fontFamily: 'Cormorant Infant',
                fontWeight: '700',
                lineHeight: '60px',
              }}
            >
              Explore
            </h2>
            <p
              style={{
                color: 'rgb(53, 43, 42)',
                fontSize: '18px',
                maxWidth: '600px',
                textAlign: 'center',
                fontFamily: 'Karla',
                lineHeight: '27px',
              }}
            >
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div
            style={{
              width: '100%',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              position: 'relative',
              alignItems: 'center',
              transition: '0.3s',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                top: '0px',
                left: '0px',
                right: '0px',
                width: '100%',
                bottom: '0px',
                height: '100%',
                margin: 'auto',
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                flexDirection: 'column',
                pointerEvents: 'none',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                alt="image"
                src="/play.svg"
                style={{
                  width: '115px',
                  objectFit: 'cover',
                }}
              />
            </div>
            <video
              src
              poster="/spotlight-cover1-1500w.png"
              style={{
                width: '100%',
              }}
            ></video>
          </div>
        </div>
        <p
          style={{
            fontSize: '24px',
            maxWidth: '900px',
            textAlign: 'center',
            lineHeight: '36px',
          }}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto.
        </p>
        <div
          style={{
            gap: 'var(--dl-space-space-oneandhalfunits)',
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Link
            to="/home"
            style={{
              display: 'contents',
            }}
          >
            <div
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                textDecoration: 'none',
              }}
            >
              <Location></Location>
            </div>
          </Link>
          <Link
            to="/home"
            style={{
              display: 'contents',
            }}
          >
            <div
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                textDecoration: 'none',
              }}
            >
              <Location
                Location="Paris, France"
                Background="/destination-2-400h.png"
              ></Location>
            </div>
          </Link>
          <Link
            to="/home"
            style={{
              display: 'contents',
            }}
          >
            <div
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                textDecoration: 'none',
              }}
            >
              <Location
                Location="Bruges, Belgium"
                Background="/destination-3-400h.png"
              ></Location>
            </div>
          </Link>
          <Link
            to="/home"
            style={{
              display: 'contents',
            }}
          >
            <div
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                textDecoration: 'none',
              }}
            >
              <Location
                Location="London, UK"
                Background="/destination-4-400h.png"
              ></Location>
            </div>
          </Link>
        </div>
        <button
          style={{
            fontStyle: 'normal',
            fontWeight: '500',
            paddingTop: 'var(--dl-space-space-unit)',
            transition: '0.3s',
            borderWidth: '0px',
            paddingLeft: 'var(--dl-space-space-oneandhalfunits)',
            borderRadius: '56px',
            paddingRight: 'var(--dl-space-space-oneandhalfunits)',
            paddingBottom: 'var(--dl-space-space-unit)',
            backgroundColor: 'rgb(250, 216, 122)',
          }}
        >
          Find a local guide
        </button>
      </section>
      <section
        id="about"
        style={{
          gap: 'var(--dl-space-space-fiveunits)',
          width: '100%',
          display: 'flex',
          maxWidth: '1440px',
          alignItems: 'center',
          paddingLeft: 'var(--dl-space-space-fiveunits)',
          paddingRight: 'var(--dl-space-space-fiveunits)',
          flexDirection: 'column',
          paddingBottom: 'var(--dl-space-space-fourunits)',
        }}
      >
        <div
          style={{
            gap: 'var(--dl-space-space-oneandhalfunits)',
            width: '100%',
            display: 'flex',
            maxWidth: '900px',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2
            style={{
              color: 'rgb(53, 43, 42)',
              fontSize: '60px',
              fontStyle: 'normal',
              textAlign: 'center',
              fontFamily: 'Cormorant Infant',
              fontWeight: '700',
              lineHeight: '60px',
            }}
          >
            Meet Meditriever
          </h2>
          <p
            style={{
              color: 'rgb(53, 43, 42)',
              fontSize: '18px',
              maxWidth: '600px',
              textAlign: 'center',
              fontFamily: 'Karla',
              lineHeight: '27px',
            }}
          >
            Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
            tempor incididunt.
          </p>
        </div>
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridGap: 'var(--dl-space-space-threeunits)',
            alignItems: 'center',
            flexDirection: 'column',
            gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
          }}
        >
          <Link to="/home">
            <div
              style={{
                width: '100%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                textDecoration: 'none',
              }}
            >
              <Guide></Guide>
            </div>
          </Link>
          <Link to="/home">
            <div
              style={{
                width: '100%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                textDecoration: 'none',
              }}
            >
              <Guide
                Location="Paris, France"
                Portrait="/guide-2.png"
                rootClassName="rootClassName2"
              ></Guide>
            </div>
          </Link>
          <Link to="/home">
            <div
              style={{
                width: '100%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                textDecoration: 'none',
              }}
            >
              <Guide
                Location="Bruges, Belgium"
                Portrait="/guide-3.png"
                rootClassName="rootClassName"
              ></Guide>
            </div>
          </Link>
          <Link to="/home">
            <div
              style={{
                width: '100%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                textDecoration: 'none',
              }}
            >
              <Guide
                Location="London, UK "
                Portrait="/guide-4.png"
                rootClassName="rootClassName1"
              ></Guide>
            </div>
          </Link>
        </div>
      </section>
      <section
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'var(--dl-space-space-fourunits)',
          paddingLeft: 'var(--dl-space-space-fiveunits)',
          paddingRight: 'var(--dl-space-space-fiveunits)',
          flexDirection: 'column',
          paddingBottom: 'var(--dl-space-space-fourunits)',
          backgroundColor: '#F8F0E9',
        }}
      >
        <div
          id="articles"
          style={{
            gap: 'var(--dl-space-space-fiveunits)',
            width: '100%',
            display: 'flex',
            maxWidth: '1440px',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              gap: 'var(--dl-space-space-oneandhalfunits)',
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
                fontSize: '60px',
                maxWidth: '800px',
                fontStyle: 'normal',
                fontFamily: 'Cormorant Infant',
                fontWeight: '700',
                lineHeight: '60px',
              }}
            >
              Excepteur sint occaecat cupidatat non proident
            </h2>
            <p
              style={{
                color: 'rgb(53, 43, 42)',
                fontSize: '18px',
                maxWidth: '800px',
                textAlign: 'center',
                fontFamily: 'Karla',
                lineHeight: '27px',
              }}
            >
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div
            style={{
              gap: 'var(--dl-space-space-fourunits)',
              width: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                gap: 'var(--dl-space-space-fourunits)',
                width: '100%',
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'row',
              }}
            >
              <Article
                Image="/articles-11-1500w.png"
                rootClassName="rootClassName1"
              ></Article>
              <Article
                Image="/articles-21-1500w.png"
                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                rootClassName="rootClassName"
              ></Article>
            </div>
            <div
              style={{
                gap: '130px',
                width: '100%',
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'row',
              }}
            >
              <Article
                Image="/articles-31-1500w.png"
                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                rootClassName="rootClassName2"
              ></Article>
              <Article
                Image="/articles-41-1500w.png"
                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                rootClassName="rootClassName3"
              ></Article>
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <button
                style={{
                  paddingLeft: 'var(--dl-space-space-oneandhalfunits)',
                  paddingRight: 'var(--dl-space-space-oneandhalfunits)',
                }}
              >
                Read all articles
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'var(--dl-space-space-fourunits)',
          paddingLeft: 'var(--dl-space-space-fiveunits)',
          paddingRight: 'var(--dl-space-space-fiveunits)',
          flexDirection: 'column',
          paddingBottom: 'var(--dl-space-space-fourunits)',
          backgroundColor: '#E8DED5',
        }}
      >
        <div
          id="faqs"
          style={{
            gap: 'var(--dl-space-space-fiveunits)',
            width: '100%',
            display: 'flex',
            maxWidth: '1440px',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              gap: 'var(--dl-space-space-oneandhalfunits)',
              width: '100%',
              display: 'flex',
              maxWidth: '900px',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h2
              style={{
                color: 'rgb(53, 43, 42)',
                fontSize: '60px',
                fontStyle: 'normal',
                textAlign: 'center',
                fontFamily: 'Cormorant Infant',
                fontWeight: '700',
                lineHeight: '60px',
              }}
            >
              Frequently asked questions
            </h2>
            <p
              style={{
                color: 'rgb(53, 43, 42)',
                fontSize: '18px',
                maxWidth: '600px',
                textAlign: 'center',
                fontFamily: 'Karla',
                lineHeight: '27px',
              }}
            >
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              maxWidth: '900px',
              position: 'relative',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div data-role="accordion-container">
              <div
                style={{
                  gap: 'var(--dl-space-space-oneandhalfunits)',
                  display: 'flex',
                  maxWidth: '700px',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    color: 'rgb(0, 0, 0)',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                  }}
                >
                  Lorem ipsum dolor sit ametetur elit?
                </span>
                <span
                  data-role="accordion-content"
                  style={{
                    color: '#000000',
                    fontSize: '18px',
                    maxWidth: '800px',
                    lineHeight: '27px',
                  }}
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div
                style={{
                  paddingTop: 'var(--dl-space-space-halfunit)',
                }}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  style={{
                    fill: '#ffffff',
                    width: '16px',
                    height: '16px',
                    display: 'none',
                  }}
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  style={{
                    fill: '#000000',
                    width: '16px',
                    height: '16px',
                  }}
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              style={{
                alignItems: 'flex-start',
                paddingTop: 'var(--dl-space-space-oneandhalfunits)',
                paddingBottom: 'var(--dl-space-space-oneandhalfunits)',
              }}
            >
              <div
                style={{
                  gap: 'var(--dl-space-space-oneandhalfunits)',
                  display: 'flex',
                  maxWidth: '700px',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    color: 'rgb(0, 0, 0)',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                  }}
                >
                  Excepteur sint occaecat cupidatat non sunt in culpa qui
                  officia deserunt mollit anim id est laborum?
                </span>
                <span
                  data-role="accordion-content"
                  style={{
                    color: '#000000',
                    fontSize: '18px',
                    maxWidth: '800px',
                    lineHeight: '27px',
                  }}
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div
                style={{
                  paddingTop: 'var(--dl-space-space-halfunit)',
                }}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  style={{
                    fill: '#ffffff',
                    width: '16px',
                    height: '16px',
                    display: 'none',
                  }}
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  style={{
                    fill: '#000000',
                    width: '16px',
                    height: '16px',
                  }}
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              style={{
                alignItems: 'flex-start',
                paddingTop: 'var(--dl-space-space-oneandhalfunits)',
                paddingBottom: 'var(--dl-space-space-oneandhalfunits)',
              }}
            >
              <div
                style={{
                  gap: 'var(--dl-space-space-oneandhalfunits)',
                  display: 'flex',
                  maxWidth: '700px',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    color: 'rgb(0, 0, 0)',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                  }}
                >
                  Tempor incididunt ut labore et dolore magna aliquat enim ad
                  minim?
                </span>
                <span
                  data-role="accordion-content"
                  style={{
                    color: '#000000',
                    fontSize: '18px',
                    maxWidth: '800px',
                    lineHeight: '27px',
                  }}
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div
                style={{
                  paddingTop: 'var(--dl-space-space-halfunit)',
                }}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  style={{
                    fill: '#ffffff',
                    width: '16px',
                    height: '16px',
                    display: 'none',
                  }}
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  style={{
                    fill: '#000000',
                    width: '16px',
                    height: '16px',
                  }}
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              style={{
                alignItems: 'flex-start',
                paddingTop: 'var(--dl-space-space-oneandhalfunits)',
                paddingBottom: 'var(--dl-space-space-oneandhalfunits)',
              }}
            >
              <div
                style={{
                  gap: 'var(--dl-space-space-oneandhalfunits)',
                  display: 'flex',
                  maxWidth: '700px',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    color: 'rgb(0, 0, 0)',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                  }}
                >
                  Lorem ipsum dolor sit ametetur elit?
                </span>
                <span
                  data-role="accordion-content"
                  style={{
                    color: '#000000',
                    fontSize: '18px',
                    maxWidth: '800px',
                    lineHeight: '27px',
                  }}
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div
                style={{
                  paddingTop: 'var(--dl-space-space-halfunit)',
                }}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  style={{
                    fill: '#ffffff',
                    width: '16px',
                    height: '16px',
                    display: 'none',
                  }}
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  style={{
                    fill: '#000000',
                    width: '16px',
                    height: '16px',
                  }}
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              style={{
                alignItems: 'flex-start',
                paddingTop: 'var(--dl-space-space-oneandhalfunits)',
                paddingBottom: 'var(--dl-space-space-oneandhalfunits)',
              }}
            >
              <div
                style={{
                  gap: 'var(--dl-space-space-oneandhalfunits)',
                  display: 'flex',
                  maxWidth: '700px',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    color: 'rgb(0, 0, 0)',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                  }}
                >
                  Incididunt ut labore et dolore?
                </span>
                <span
                  data-role="accordion-content"
                  style={{
                    color: '#000000',
                    fontSize: '18px',
                    maxWidth: '800px',
                    lineHeight: '27px',
                  }}
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div
                style={{
                  paddingTop: 'var(--dl-space-space-halfunit)',
                }}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  style={{
                    fill: '#ffffff',
                    width: '16px',
                    height: '16px',
                    display: 'none',
                  }}
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  style={{
                    fill: '#000000',
                    width: '16px',
                    height: '16px',
                  }}
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="find"
        style={{
          gap: 'var(--dl-space-space-threeunits)',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'var(--dl-space-space-fourunits)',
          paddingLeft: 'var(--dl-space-space-fiveunits)',
          paddingRight: 'var(--dl-space-space-fiveunits)',
          flexDirection: 'column',
          paddingBottom: 'var(--dl-space-space-fourunits)',
          backgroundColor: '#477E5D',
        }}
      >
        <div
          style={{
            gap: 'var(--dl-space-space-oneandhalfunits)',
            width: '100%',
            display: 'flex',
            maxWidth: '900px',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2
            style={{
              color: 'rgb(255, 255, 255)',
              fontSize: '60px',
              fontStyle: 'normal',
              textAlign: 'center',
              fontFamily: 'Cormorant Infant',
              fontWeight: '700',
              lineHeight: '60px',
            }}
          >
            Find a local guide now
          </h2>
          <p
            style={{
              color: '#ffffff',
              fontSize: '18px',
              textAlign: 'center',
              fontFamily: 'Karla',
              lineHeight: '27px',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <button
          style={{
            fontStyle: 'normal',
            fontWeight: '500',
            paddingTop: 'var(--dl-space-space-unit)',
            transition: '0.3s',
            borderWidth: '0px',
            paddingLeft: 'var(--dl-space-space-oneandhalfunits)',
            borderRadius: '56px',
            paddingRight: 'var(--dl-space-space-oneandhalfunits)',
            paddingBottom: 'var(--dl-space-space-unit)',
            backgroundColor: 'rgb(250, 216, 122)',
          }}
        >
          Find a local guide
        </button>
      </section>
      <section
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: '#352B2A',
        }}
      >
        <div
          style={{
            gap: '120px',
            width: '100%',
            display: 'flex',
            maxWidth: '1440px',
            position: 'relative',
            alignItems: 'flex-start',
            paddingTop: 'var(--dl-space-space-fourunits)',
            paddingLeft: 'var(--dl-space-space-fiveunits)',
            paddingRight: 'var(--dl-space-space-fiveunits)',
            flexDirection: 'column',
            paddingBottom: 'var(--dl-space-space-threeunits)',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                gap: 'var(--dl-space-space-threeunits)',
                display: 'flex',
                maxWidth: '400px',
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  gap: 'var(--dl-space-space-oneandhalfunits)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <img
                  alt="image"
                  src="/logo.svg"
                  style={{
                    height: '33px',
                    objectFit: 'cover',
                  }}
                />
                <p
                  style={{
                    color: 'rgb(255, 255, 255)',
                    fontSize: '14px',
                    lineHeight: '21px',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div
              style={{
                gap: '100px',
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'row',
              }}
            >
              <div
                style={{
                  gap: 'var(--dl-space-space-unit)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <button
                  style={{
                    color: 'rgb(255, 255, 255)',
                  }}
                >
                  Find a guide
                </button>
                <a
                  href="#destinations"
                  style={{
                    color: 'rgb(255, 255, 255)',
                    textDecoration: 'none',
                  }}
                >
                  Find a tour
                </a>
                <a
                  href="#destinations"
                  style={{
                    color: 'rgb(255, 255, 255)',
                    textDecoration: 'none',
                  }}
                >
                  Visit a city
                </a>
                <a
                  href="#destinations"
                  style={{
                    color: 'rgb(255, 255, 255)',
                    textDecoration: 'none',
                  }}
                >
                  Visit a country
                </a>
              </div>
              <div
                style={{
                  gap: 'var(--dl-space-space-unit)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <a
                  href="#how-it-works"
                  style={{
                    color: 'rgb(255, 255, 255)',
                    textDecoration: 'none',
                  }}
                >
                  How it works
                </a>
                <button
                  style={{
                    color: 'rgb(255, 255, 255)',
                  }}
                >
                  Cancelation policy
                </button>
                <button
                  style={{
                    color: 'rgb(255, 255, 255)',
                  }}
                >
                  Local guides
                </button>
                <button
                  style={{
                    color: 'rgb(255, 255, 255)',
                  }}
                >
                  Affiliate
                </button>
              </div>
              <div
                style={{
                  gap: 'var(--dl-space-space-unit)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <button
                  style={{
                    color: 'rgb(255, 255, 255)',
                  }}
                >
                  About us
                </button>
                <button
                  style={{
                    color: 'rgb(255, 255, 255)',
                  }}
                >
                  Blog
                </button>
                <button
                  style={{
                    color: 'rgb(255, 255, 255)',
                  }}
                >
                  Partners
                </button>
                <button
                  style={{
                    color: 'rgb(255, 255, 255)',
                  }}
                >
                  Faqs
                </button>
                <button
                  style={{
                    color: 'rgb(255, 255, 255)',
                  }}
                >
                  Careers
                </button>
              </div>
            </div>
          </div>
          <span
            style={{
              color: '#766968',
              fontSize: '12px',
            }}
          >
            © 2022 Character. All Rights Reserved.
          </span>
        </div>
      </section>
      <div>
        <div
          style={{
            display: 'contents',
          }}
        >
          <Script
            html={`<script>
  function initAccordion() {
    /*
    Accordion - Code Embed
    */
    const accordionContainers = document.querySelectorAll(
      '[data-role="accordion-container"]'
    ); // All accordion containers
    const accordionContents = document.querySelectorAll(
      '[data-role="accordion-content"]'
    ); // All accordion content
    const accordionIconsClosed = document.querySelectorAll(
      '[data-role="accordion-icon-closed"]'
    ); // All accordion closed icons
    const accordionIconsOpen = document.querySelectorAll(
      '[data-role="accordion-icon-open"]'
    ); // All accordion open icons

    accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionIconsClosed.forEach((icon) => {
      icon.style.display = "flex";
    });

    accordionIconsOpen.forEach((icon) => {
      icon.style.display = "none";
    });

    accordionContainers.forEach((accordionContainer, index) => {
      if (accordionContainer.classList.contains("initialised")) {
        return;
      }

      accordionContainer.classList.add("initiased");

      accordionContainer.addEventListener("click", () => {
        if (accordionContents[index].style.display === "flex") {
          // If the accordion is already open, close it
          accordionContents[index].style.display = "none";
          accordionIconsClosed[index].style.display = "flex";
          accordionIconsOpen[index].style.display = "none";
        } else {
          // If the accordion is closed, open it
          accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
          });

          accordionIconsClosed.forEach((accordionIcon) => {
            accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
          });

          accordionIconsOpen.forEach((accordionIcon) => {
            accordionIcon.style.display = "none";
          });

          accordionContents[index].style.display = "flex"; // Shows accordion content
          accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
          accordionIconsOpen[index].style.display = "flex";
        }
      });
    });
  }

  initAccordion();
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
