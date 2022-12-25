import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { useCollections } from "medusa-react"
import Link from "next/link"
import { ReactElement, useEffect, useState } from "react"
import { NextPageWithLayout } from "types/global"
import LoadScripts from "utils/LoadScripts"
import { Tab } from "@headlessui/react"
import { contentfulClient } from "utils/contenful"
import { Ambassador, Branding, HomePage } from "types/contentful"
import { Entry } from "contentful"
import { getAmbassadors, getBrandings, getHomePage } from "@lib/data/content"

const Home: NextPageWithLayout = () => {
  const { data } = useFeaturedProductsQuery()
  const { collections } = useCollections()
  const [brandings, setBrandings] = useState<Entry<Branding>[]>([])
  const [ambassadors, setAmbassadors] = useState<Entry<Ambassador>[]>([])
  const [homePage, setHomePage] = useState<Entry<HomePage> | null>(null)

  useEffect(() => {
    getBrandings().then((brandings) => {
      setBrandings(brandings)
    })

    getAmbassadors().then((ambassadors) => {
      setAmbassadors(ambassadors)
    })

    getHomePage().then((res) => {
      setHomePage(res)
    })
  }, [])

  return (
    <>
      <LoadScripts
        srcs={[
          "/assets/scripts/plugins.min.js",
          "/assets/scripts/script.js",
          // "/assets/scripts/pages/index.js",
        ]}
      />
      <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      <div
        className="vlt-hero-title-holder jarallax"
        style={{
          backgroundImage: `url("${homePage?.fields.banner.fields.file.url}")`,
        }}
      >
        <div className="vlt-hero-title-inner">
          <h1 className="vlt-hero-title">{homePage?.fields.title}</h1>
          <p className="vlt-hero-subtitle">{homePage?.fields.description}</p>
        </div>
      </div>
      {/* /.vlt-hero-title-holder */}
      <main className="vlt-main-holder vlt-main-padding">
        <div className="container">
          <Tab.Group>
            <Tab.List className="vlt-portfolio-grid-filters">
              <Tab
                key="all"
                className={({ selected }) =>
                  `cbp-filter-item ${selected ? "cbp-filter-item-active" : ""}`
                }
              >
                Collections
              </Tab>
              <Tab
                key="branding"
                className={({ selected }) =>
                  `cbp-filter-item ${selected ? "cbp-filter-item-active" : ""}`
                }
              >
                Branding
              </Tab>
              <Tab
                key="sns"
                className={({ selected }) =>
                  `cbp-filter-item ${selected ? "cbp-filter-item-active" : ""}`
                }
              >
                SNS
              </Tab>
              <Tab
                key="photo"
                className={({ selected }) =>
                  `cbp-filter-item ${selected ? "cbp-filter-item-active" : ""}`
                }
              >
                Ambassadors
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="vlt-portfolio-grid cubeportfolio row">
                  {collections?.map((product) => (
                    <article
                      key={product.id}
                      className="col-md-4 mb-5 vlt-portfolio-grid-item vlt-portfolio-style2 portfolio_category-photo cursor-pointer"
                    >
                      <div className="vlt-portfolio-grid-image">
                        <Link
                          className="vlt-portfolio-grid-link"
                          href={`/collections/${product.id}`}
                        >
                          <img
                            src={
                              String(product.metadata.image) ||
                              "/assets/img/portfolio/1.jpg"
                            }
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="vlt-portfolio-grid-content">
                        <h5 className="vlt-portfolio-grid-title">
                          {product.title}
                        </h5>
                        <p className="vlt-portfolio-grid-cat">Photo</p>
                      </div>
                    </article>
                  ))}
                </div>
                {/* <nav
                  className="vlt-pagination-load-more-btn"
                  data-max-pages={1}
                >
                  <a
                    href="load-more-portfolio-page-1.html"
                    className="vlt-btn vlt-btn-primary vlt-btn-ajax-load"
                  >
                    Load More
                  </a>
                </nav> */}
              </Tab.Panel>
              <Tab.Panel>
                <div className="vlt-portfolio-grid cubeportfolio row">
                  {brandings.map((branding) => (
                    <article
                      key={branding.sys.id}
                      className="col-md-4 mb-5 vlt-portfolio-grid-item vlt-portfolio-style2 portfolio_category-photo"
                    >
                      <div className="vlt-portfolio-grid-image">
                        <img
                          src={
                            String(branding.fields.image.fields.file.url) ||
                            "/assets/img/portfolio/1.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="vlt-portfolio-grid-content">
                        <h5 className="vlt-portfolio-grid-title">
                          {branding.fields.name}
                        </h5>
                        <p className="vlt-portfolio-grid-cat">Photo</p>
                      </div>
                    </article>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid grid-cols-1 small:grid-cols-3 gap-x-2 gap-y-2">
                  <div className="flex justify-center drop-shadow-xl">
                    <iframe
                      // className="pr-10"
                      src="https://www.instagram.com/p/CmbjXRTyeaQ/embed"
                      width="350"
                      height="600"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                    ></iframe>
                  </div>
                  <div className="flex justify-center drop-shadow-xl">
                    <iframe
                      // className="pr-10"
                      src="https://www.instagram.com/p/CmT05KHSArL/embed"
                      width="350"
                      height="600"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                    ></iframe>
                  </div>
                  <div className="flex justify-center drop-shadow-xl">
                    <iframe
                      // className="pr-10"
                      src="https://www.instagram.com/p/CltLNo0SWSb/embed"
                      width="350"
                      height="600"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                    ></iframe>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="vlt-portfolio-grid cubeportfolio row">
                  {ambassadors.map((ambassador) => (
                    <article
                      key={ambassador.sys.id}
                      className="col-md-4 mb-5 vlt-portfolio-grid-item vlt-portfolio-style2 portfolio_category-photo"
                    >
                      <div className="vlt-portfolio-grid-image">
                        <img
                          src={
                            String(ambassador.fields.image.fields.file.url) ||
                            "/assets/img/portfolio/1.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="vlt-portfolio-grid-content">
                        <h5 className="vlt-portfolio-grid-title">
                          {ambassador.fields.name}
                        </h5>
                        <p className="vlt-portfolio-grid-cat">Photo</p>
                      </div>
                    </article>
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
      {/* <Hero /> */}
      {/* <FeaturedProducts /> */}
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
