import { useMenu } from "@lib/context/menu-context"
import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { useOnClickOutside } from "@lib/hooks/use-click-outside"
import clsx from "clsx"
import { useCart, useMeCustomer } from "medusa-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"

const Nav = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { customer } = useMeCustomer()
  const { pathname } = useRouter()
  const { totalItems } = useCart()
  const { openMenu, closeMenu, isOpenMenu } = useMenu()

  useOnClickOutside(ref, () => {
    if (isOpenMenu) {
      closeMenu()
    }
  })

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
    <div
      className="vlt-navigation-aside-holder ease-in duration-300"
      ref={ref}
      style={{
        transform: isOpenMenu ? "translate(0%, 0px)" : "translate(100%, 0px)",
        transition: "all 0.5s",
      }}
    >
      <div className="vlt-navigation-aside">
        <ul>
          <li>
            <Link href={"/"}>
              <a onClick={() => closeMenu()}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/account">
              <a onClick={() => closeMenu()}>
                {customer ? customer.first_name : "Login"}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a onClick={() => closeMenu()}>Story</a>
            </Link>
          </li>
          <li>
            {/* <Link href="/blog"> */}
            <a onClick={() => closeMenu()}>Thông tin</a>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link href="/blog"> */}
            <a onClick={() => closeMenu()}>Contact</a>
            {/* </Link> */}
          </li>
          <li>
            <Link href="/cart">
              <a onClick={() => closeMenu()}>{`My Bag (${totalItems})`}</a>
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
              <a href="#" className="tooltip" title="Instagram">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="tooltip" title="Pinterest">
                <img src="/tiktok.svg" className="w-[11px]"/>
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
