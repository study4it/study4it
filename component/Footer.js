import React from 'react'

import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles['root']}>
    <div className={styles['container']}>
      <div className={styles['left-half']}>2019-2020 © All rights reserved</div>
      <address className={styles['right-half']}>
        <div className={styles['text']}>мы в соц. сетях:</div>
        <a className={styles['icon-container']} href="https://vk.com/study4it">
          <img src="/vk.svg" className={styles['icon']} />
        </a>
      </address>
    </div>
  </footer>
)

export default Footer
