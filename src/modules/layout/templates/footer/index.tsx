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
                <ul>
                  <li>
                    <a href="#">Works</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Purchase</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="vlt-footer-copyright">
              <p>
                Copyright © 2017 Vinero. Powered by{" "}
                <a href="#" className="vlt-link reverse">
                  VLThemes
                </a>
              </p>
              <CountrySelect />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
