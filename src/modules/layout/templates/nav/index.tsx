import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { useCart } from "medusa-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Nav = () => {
  const { pathname } = useRouter()
  const { totalItems } = useCart()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    <div className="vlt-navigation-aside-holder">
      <div className="vlt-navigation-aside">
        <ul>
          <li>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/account">
              <a>Account</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a>{`My Bag (${totalItems})`}</a>
            </Link>
          </li>
          {/* <li className="menu-item-has-children">
            <a href="#" className="no-anims">
              Pages
            </a>
            <ul className="sub-menu">
              <li>
                <a href="about-us.html">About Us</a>
              </li>
              <li>
                <a href="about-me.html">About Me</a>
              </li>
              <li>
                <a href="elements.html">Elements</a>
              </li>
              <li>
                <a href="404.html">Page 404</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#" className="no-anims">
              Stories
            </a>
            <ul className="sub-menu">
              <li>
                <a href="blog-with-sidebar.html">Stories</a>
              </li>
              <li>
                <a href="blog-fullwidth.html">Stories Full Width</a>
              </li>
              <li>
                <a href="blog-masonry.html">Stories Masonry</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#" className="no-anims">
              Portfolio
            </a>
            <ul className="sub-menu">
              <li>
                <a href="portfolio-masonry.html">Portfolio Grid</a>
              </li>
              <li>
                <a href="portfolio-masonry-lightbox.html">Portfolio Fancybox</a>
              </li>
              <li>
                <a href="portfolio-dribbble.html">Dribbble Shots</a>
              </li>
              <li>
                <a href="portfolio-ranfolio.html">Ranfolio</a>
              </li>
              <li>
                <a href="portfolio-hoverfolio.html">Hoverfolio</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li> */}
        </ul>
        <div className="vlt-navigation-socials">
          <ul>
            <li>
              <a href="#" className="tooltip" title="Dribbble">
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a href="#" className="tooltip" title="Pinterest">
                <i className="fa fa-pinterest" />
              </a>
            </li>
            <li>
              <a href="#" className="tooltip" title="Facebook">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="tooltip" title="YouTube">
                <i className="fa fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
        {/* /.vlt-navigation-socials */}
      </div>
    </div>
  )
}

export default Nav
