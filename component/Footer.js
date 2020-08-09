import React from 'react'

const Footer = () => (
  <footer className="root">
    <div className="container">
      <div className="left-half">2019-2020 © All rights reserved</div>
      <address className="right-half">
        <div className="text">мы в соц. сетях:</div>
        <a className="icon-container" href="https://vk.com/study4it">
          <img src="/assets/vk.svg" className="icon" />
        </a>
      </address>
    </div>
    <style jsx>{`
      .root {
        margin: 50px;
      }
      .container {
        margin: 50px;
      }
      .icon-container {
        margin: 50px;
      }
      .icon {
        margin: 50px;
      }
      .text {
        margin: 50px;
      }
      .left-half {
        margin: 50px;
      }
      .right-half {
        margin: 50px;
      }
    `}</style>
  </footer>
)

export default Footer
