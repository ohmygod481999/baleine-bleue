import { useMenu } from "@lib/context/menu-context"
import Link from "next/link"
import React from "react"

function Header() {
  const { openMenu, closeMenu, isOpenMenu } = useMenu()
  return (
    <header
      className="vlt-header-holder vlt-header-fixed"
      data-header-fixed={1}
    >
      <div className="container">
        <div className="vlt-header-inner">
          <div className="vlt-header-left">
            <Link href={"/"}>
              <a className="vlt-site-logo">
                <img
                  src="/assets/img/logo.png"
                  alt="Vinero"
                  style={{ maxHeight: "13px" }}
                />
              </a>
            </Link>
          </div>
          <div className="vlt-header-right">
            <div
              className="vlt-menu-toggle vlt-aside-menu-toggle"
              data-before-text="Menu"
              onClick={() => openMenu()}
            >
              <span className="line line-one">
                <span className="inner" />
              </span>
              <span className="line line-two">
                <span className="inner" />
              </span>
              <span className="line line-three">
                <span className="inner" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
