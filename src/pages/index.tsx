import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { useCollections } from "medusa-react"
import Link from "next/link"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import LoadScripts from "utils/LoadScripts"
import { Tab } from "@headlessui/react"

const Home: NextPageWithLayout = () => {
  const { data } = useFeaturedProductsQuery()
  const { collections } = useCollections()

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
        style={{ backgroundImage: 'url("assets/img/index.jpg")' }}
      >
        <div className="vlt-hero-title-inner">
          <h1 className="vlt-hero-title">We are Vinero</h1>
          <p className="vlt-hero-subtitle">Work hard. Dream big.</p>
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
                All
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
                key="desgin"
                className={({ selected }) =>
                  `cbp-filter-item ${selected ? "cbp-filter-item-active" : ""}`
                }
              >
                Design
              </Tab>
              <Tab
                key="photo"
                className={({ selected }) =>
                  `cbp-filter-item ${selected ? "cbp-filter-item-active" : ""}`
                }
              >
                Photo
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="vlt-portfolio-grid cubeportfolio row">
                  {collections?.map((product) => (
                    <article
                      key={product.id}
                      className="col-md-4 mb-5 vlt-portfolio-grid-item vlt-portfolio-style2 portfolio_category-photo"
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
                <nav
                  className="vlt-pagination-load-more-btn"
                  data-max-pages={1}
                >
                  <a
                    href="load-more-portfolio-page-1.html"
                    className="vlt-btn vlt-btn-primary vlt-btn-ajax-load"
                  >
                    Load More
                  </a>
                </nav>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
      {/* <Hero /> */}
      <FeaturedProducts />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
