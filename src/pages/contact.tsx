import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import LoadScripts from "utils/LoadScripts"

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <LoadScripts
        srcs={["/assets/scripts/plugins.min.js", "/assets/scripts/script.js"]}
      />
      <Head title="Contact" description="contact" />
      <div
        className="vlt-hero-title-holder jarallax"
        style={{ backgroundImage: 'url("assets/img/index.jpg")' }}
      >
        <div className="vlt-hero-title-inner">
          <h1 className="vlt-hero-title">Contact Us</h1>
          <p className="vlt-hero-subtitle">Get in touch with us</p>
        </div>
      </div>
      {/* /.vlt-hero-title-holder */}
      <main className="vlt-main-holder vlt-main-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-5">
              <div className="mb30">
                <h5 className="uppercase mb10">Contact Info</h5>
                <p>
                  Vinero is located in Canada (USA) with support offices
                  <br />
                  throughout the world.
                </p>
                <dl>
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:vinero@example.com">vinero@example.com</a>
                  </dd>
                  <dt>Phone</dt>
                  <dd>+1234567890</dd>
                  <dt>Fax</dt>
                  <dd>54321</dd>
                  <dt>Address</dt>
                  <dd>St. Elevrin No.105 Cromvel, Canada</dd>
                </dl>
                <a className="vlt-single-icon" href="#" target="_self">
                  <i className="fa fa-instagram" />
                </a>
                <a className="vlt-single-icon" href="#" target="_self">
                  <i className="fa fa-behance" />
                </a>
                <a className="vlt-single-icon" href="#" target="_self">
                  <i className="fa fa-facebook" />
                </a>
                <a className="vlt-single-icon" href="#" target="_self">
                  <i className="fa fa-twitter" />
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <div className="vlt-map">
                <div id="map" style={{ height: "250px" }} />
                <div className="vlt-map-controls">
                  <div id="zoom-in">+</div>
                  <div id="zoom-out">-</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

Contact.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Contact
