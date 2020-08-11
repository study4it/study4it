import React from 'react'
import Link from 'next/link'

import styles from './Logo.module.css'

const Logo = () => (
  <Link href="/">
    <a className={styles['root']}>
      <img className={styles['icon']} src="/logo.png" />
      <div className={styles['text']}>Study4IT</div>
    </a>
  </Link>
)

export default Logo
