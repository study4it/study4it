import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showLeftMenu, hideLeftMenu } from '../redux/actions'

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
      <a className="item" activeClassName="item--active">
        {children}
      </a>
    </Link>
  )

  render() {
    const { items, isShown } = this.props
    return (
      <div className="root">
        <div className="menu-button" onClick={this.toggle}>
          <img
            className={'menu-button-icon' + (isShown ? '' : ' ' + 'menu-button-icon--hidden')}
            src="/assets/left-arrow.svg"
          />
          <img
            className={'menu-button-icon' + (isShown ? ' ' + 'menu-button-icon--hidden' : '')}
            src="/assets/menu-button.svg"
          />
        </div>
        <div className={'shadow' + (isShown ? ' ' + 'shadow--shown' : '')} onClick={this.props.hideLeftMenu} />
        <nav className={'menu' + (isShown ? ' ' + 'menu--shown' : '')}>{items.map(this.renderItem)}</nav>
      </div>
    )
  }
}

const ConnectedHeaderLeftMenu = connect(mapStateToProps, mapDispatchToProps)(HeaderLeftMenu)

export default ConnectedHeaderLeftMenu
