import React from 'react'

import Logo from './Logo'
import HeaderTopMenu from './HeaderTopMenu'
import HeaderLeftMenu from '../container/HeaderLeftMenu'

import styles from './Header.module.css'

const items = [
  { children: 'Купить лабораторные работы', href: '/labs' },
  { children: 'Стать учеником', href: '/mentor' },
]

const Header = () => (
  <header className={styles['root']}>
    <div className={styles['container']}>
      <div className={styles['content']}>
        <HeaderLeftMenu items={items} />
        <Logo />
        <HeaderTopMenu items={items} />
      </div>
    </div>
  </header>
)

export default Header
