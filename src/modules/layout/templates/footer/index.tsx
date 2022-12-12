import CountrySelect from "@modules/layout/components/country-select"

const Footer = () => {
  return (
    <footer
      className="vlt-footer-holder vlt-footer-minimal"
      data-footer-fixed={1}
    >
      <div className="vlt-footer-inner">
        <div className="container">
          <div className="text-center">
            <a href="index.html" className="vlt-site-logo">
              <img
                src="/assets/img/logo.png"
                alt="Vinero"
                style={{ maxHeight: "13px" }}
              />
            </a>
            <div className="vlt-footer-menu">
              <div>
                <ul className="grid small:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-y-8 gap-x-16 center">
                  <li>
                    <a href="/about-us">
                      <h5>ABOUT US</h5>
                      <span className="">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="key-message">
                    <h5>KEY MESSAGE</h5>
                    <span className="">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </span>
                    </a>
                  </li>
                  <li>
                    <a href="contact">
                      <h5>CONTACT</h5>
                      <span className="">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </span>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="vlt-footer-copyright">
              <p>
                Copyright © 2022 Baleine Bleue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
