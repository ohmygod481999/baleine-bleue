import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import React from "react"
import Header from "./header"

const Layout: React.FC = ({ children }) => {
  return (
    <div className="vlt-site-holder  vlt-footer-fixed">
      <div className="vlt-content-holder" style={{
        marginBottom: "490px"
      }}>
        <Header />
        <div className="vlt-navigation-aside-overlay"></div>
        <Nav />
        {children}
        {/* <main className="vlt-main-holder vlt-main-padding"></main> */}
        <a href="#" className="vlt-back-to-top hidden">
          <i className="fa fa-angle-up" />
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
