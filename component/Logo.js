import React from 'react'
import Link from 'next/link'

const Logo = () => (
  <Link href="/kubletes">
    <a>
      <img className="icon" src="/assets/logo.svg" />
      <div className="text">Study4IT</div>
      <style jsx>{`
        .root {
          margin: 50px;
        }
        .icon {
          margin: 50px;
        }
        .text {
          margin: 50px;
        }
      `}</style>
    </a>
  </Link>
)

export default Logo
