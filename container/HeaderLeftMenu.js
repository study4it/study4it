import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showLeftMenu, hideLeftMenu } from '../redux/actions'

import styles from './HeaderLeftMenu.module.css'

function mapStateToProps(state) {
  return {
    isShown: state.leftMenuIsShown,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showLeftMenu,
      hideLeftMenu,
    },
    dispatch,
  )
}

class HeaderLeftMenu extends React.PureComponent {
  componentDidMount() {
    window.addEventListener('resize', this.props)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.close)
  }

  toggle = () => {
    if (this.props.isShown) {
      this.props.hideLeftMenu()
    } else {
      this.props.showLeftMenu()
    }
  }

  renderItem = ({ children, href }, index) => (
    <Link key={index} href={href}>
      <a className={styles['item']}>{children}</a>
    </Link>
  )

  render() {
    const { items, isShown } = this.props
    return (
      <div className={styles['root']}>
        <div className={styles['menu-button']} onClick={this.toggle}>
          <img
            className={styles['menu-button-icon'] + (isShown ? '' : ' ' + styles['menu-button-icon--hidden'])}
            src="/left-arrow.svg"
          />
          <img
            className={styles['menu-button-icon'] + (isShown ? ' ' + styles['menu-button-icon--hidden'] : '')}
            src="/menu-button.svg"
          />
        </div>
        <div
          className={styles['shadow'] + (isShown ? ' ' + styles['shadow--shown'] : '')}
          onClick={this.props.hideLeftMenu}
        />
        <nav className={styles['menu'] + (isShown ? ' ' + styles['menu--shown'] : '')}>
          {items.map(this.renderItem)}
        </nav>
      </div>
    )
  }
}

const ConnectedHeaderLeftMenu = connect(mapStateToProps, mapDispatchToProps)(HeaderLeftMenu)

export default ConnectedHeaderLeftMenu
