import React from 'react'
import Link from 'next/link'

import styles from './HeaderTopMenu.module.css'

const renderItem = ({ children, href }, index) => (
  <Link key={index} href={href}>
    <a className={styles['item']}>{children}</a>
  </Link>
)

const HeaderTopMenu = ({ items }) => <nav className={styles['root']}>{items.map(renderItem)}</nav>

export default HeaderTopMenu
