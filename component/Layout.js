import React from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import getStore from '../redux/get-store'

import styles from './Layout.module.css'

const store = getStore()

const Layout = ({ children }) => (
  <Provider store={store}>
    <div className={styles['root']}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="utf-8" />
        <title>Study4IT</title>
        <link rel="stylesheet" href="/reset.css" />
      </Head>
      <Header />
      <div className={styles['container']}>
        <div className={styles['content']}>{children}</div>
      </div>
      <Footer />
    </div>
  </Provider>
)

export default Layout
