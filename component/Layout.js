import React from 'react'
import { Provider } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import getStore from '../redux/get-store'

const store = getStore()

const Layout = ({ children }) => (
  <Provider store={store}>
    <div className="root">
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <Footer />
      <style jsx>{`
        .root {
          margin: 50px;
        }
        .container {
          margin: 50px;
        }
        .content {
          margin: 50px;
        }
      `}</style>
    </div>
  </Provider>
)

export default Layout
