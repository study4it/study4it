import React from 'react'
import Logo from './Logo'
import HeaderTopMenu from './HeaderTopMenu'
import HeaderLeftMenu from '../container/HeaderLeftMenu'

const items = [
  { children: 'Кубы', href: '/kubes' },
  { children: 'Кублеты', href: '/kubletes' },
]

const Header = () => (
  <header className="root">
    <div className="container">
      <div className="content">
        <HeaderLeftMenu items={items} />
        <Logo />
        <HeaderTopMenu items={items} />
      </div>
    </div>
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
  </header>
)

export default Header
