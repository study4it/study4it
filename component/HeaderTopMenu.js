import React from 'react'
import Link from 'next/link'

const renderItem = ({ children, href }, index) => (
  <Link key={index} href={href}>
    <a className="item" activeClassName="item--active">
      {children}
    </a>
  </Link>
)

const HeaderTopMenu = ({ items }) => <nav className="root">{items.map(renderItem)}</nav>

export default HeaderTopMenu
