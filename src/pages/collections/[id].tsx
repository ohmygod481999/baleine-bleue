import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { medusaClient } from "@lib/config"
import { IS_BROWSER } from "@lib/constants"
import { getCollectionIds } from "@lib/util/get-collection-ids"
import CollectionTemplate from "@modules/collections/templates"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import ModalProduct from "@modules/modal/ModalProduct"
import SkeletonCollectionPage from "@modules/skeletons/templates/skeleton-collection-page"
import { Entry } from "contentful"
import { useCart } from "medusa-react"
import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import { ReactElement, useEffect, useState } from "react"
import { dehydrate, QueryClient, useQuery } from "react-query"
import { Collection } from "types/contentful"
import { Product } from "types/medusa"
import { contentfulClient } from "utils/contenful"
import LoadScripts from "utils/LoadScripts"
import { NextPageWithLayout, PrefetchedPageProps } from "../../types/global"

interface Params extends ParsedUrlQuery {
  id: string
}

const fetchCollection = async (id: string) => {
  return await medusaClient.collections.retrieve(id).then(({ collection }) => ({
    id: collection.id,
    title: collection.title,
  }))
}

export const fetchInfinityCollectionProducts = async ({
  pageParam = 0,
  id,
  cartId,
}: {
  pageParam?: number
  id: string
  cartId?: string
}) => {
  const { products, count, offset } = await medusaClient.products.list({
    limit: 12,
    offset: pageParam,
    collection_id: [id],
    cart_id: cartId,
  })

  return {
    response: { products, count },
    nextPage: count > offset + 12 ? offset + 12 : null,
  }
}

export const fetchCollectionProducts = async (id: string, cartId?: string) => {
  const { products } = await medusaClient.products.list({
    collection_id: [id],
    cart_id: cartId,
  })

  return products
}

const CollectionPage: NextPageWithLayout<PrefetchedPageProps> = ({
  notFound,
}) => {
  const { query, isFallback, replace } = useRouter()
  const [collectionContentful, setCollectionContentful] =
    useState<Entry<Collection> | null>(null)

  const [isOpenModal, setisOpenModal] = useState(false)
  const [productModal, setProductModal] = useState<Product | null>(null)

  const id = typeof query.id === "string" ? query.id : ""

  useEffect(() => {
    contentfulClient
      .getEntries<Collection>({
        content_type: "collection",
        "fields.id": id,
      })
      .then((res) => {
        console.log(res.items)
        if (res.items.length > 0) {
          const _collection = res.items[0]
          setCollectionContentful(_collection)
        }
      })
  }, [])

  const { data, isError, isSuccess, isLoading } = useQuery(
    ["get_collection", id],
    () => fetchCollection(id)
  )

  const { cart } = useCart()
  
  const {
    data: products,
    isError: isQueryProductsError,
    isLoading: isQueryProductsLoading,
    isSuccess: isQueryProductsSuccess,
  } = useQuery([`get_collection_products`, data?.id, cart?.id], () =>
    fetchCollectionProducts(data?.id || "", cart?.id)
  )

  console.log(products)

  if (notFound) {
    if (IS_BROWSER) {
      replace("/404")
    }

    return <SkeletonCollectionPage />
  }

  if (isError) {
    replace("/404")
  }

  if (isFallback || isLoading || !data) {
    return <SkeletonCollectionPage />
  }

  if (isSuccess) {
    return (
      <>
        <LoadScripts
          srcs={[
            "/assets/scripts/plugins.min.js",
            "/assets/scripts/script.js",
            // "/assets/scripts/pages/index.js",
          ]}
        />
        <Head title={data.title} description={`${data.title} collection`} />
        <ModalProduct
          isOpen={isOpenModal}
          setIsOpen={setisOpenModal}
          currentProduct={productModal}
          setCurrentProduct={setProductModal}
          products={products}
        />

        <main className="vlt-main-holder">
          <section className="vlt-main-padding">
            <div className="container">
              <div className="vlt-collage-list gutter" id="collage">
                <div className="vlt-collage-inner clearfix flex flex-wrap">
                  {products?.map((product) => (
                    <div
                      key={product.id}
                      className="vlt-collage-image basis-1/3 pb-7 pr-7"
                    >
                      {/* <Link href={`/products/${product.handle}`}> */}
                      <a
                        onClick={() => {
                          setisOpenModal(true)
                          setProductModal(product)
                        }}
                        className="vlt-collage-link lightbox-link cursor-pointer"
                        data-rel="lightcase:gallery"
                      />
                      {/* </Link> */}
                      <img
                        src={product.thumbnail || "/assets/img/portfolio/1.jpg"}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* /.vlt-collage-list gutter */}
            </div>
          </section>
          {/* /.vlt-main-padding */}
          <section className="vlt-main-padding-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <table className="vlt-project-meta">
                    <tbody>
                      <tr className="vlt-project-meta-row">
                        <td className="vlt-project-meta-title">Author</td>
                        <td className="vlt-project-meta-text">
                          Rebecca Vinero
                        </td>
                      </tr>
                      <tr className="vlt-project-meta-row">
                        <td className="vlt-project-meta-title">Date</td>
                        <td className="vlt-project-meta-text">22 July 2017</td>
                      </tr>
                      <tr className="vlt-project-meta-row">
                        <td className="vlt-project-meta-title">Skills</td>
                        <td className="vlt-project-meta-text">Photography</td>
                      </tr>
                      <tr className="vlt-project-meta-row">
                        <td className="vlt-project-meta-title">Category</td>
                        <td className="vlt-project-meta-text">Branding</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* /.vlt-project-meta */}
                </div>
                <div className="col-md-8">
                  <div className="vlt-custom-title-holder">
                    <h3 className="vlt-custom-title">{data.title}</h3>
                    <span className="vlt-custom-subtitle">Branding</span>
                  </div>
                  {/* /.vlt-custom-title-holder */}
                  {collectionContentful && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: documentToHtmlString(
                          collectionContentful.fields.description
                        ),
                      }}
                    ></div>
                  )}
                  <div
                    className="vlt-post-share"
                    id="vlthemes_el_599c40759c02c"
                  >
                    <a className="twitter" target="_blank" href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a className="facebook" target="_blank" href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a className="linkedin" target="_blank" href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                    <a className="pinterest" target="_blank" href="#">
                      <i className="fa fa-pinterest" />
                    </a>
                    <a className="google_plus" target="_blank" href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                  </div>
                  {/* /.vlt-post-share */}
                </div>
              </div>
            </div>
          </section>
          {/* /.vlt-main-padding-bottom */}
          <nav className="vlt-portfolio-navigation">
            <div className="container">
              <div className="vlt-portfolio-navigation-inner">
                <div className="prev-post">
                  <a href="#">
                    <i className="fa fa-angle-left" />
                    Previous Project
                  </a>
                </div>
                <div className="next-post">
                  <a href="#">
                    Next Project
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </nav>
          {/* /.vlt-portfolio-navigation */}
        </main>
      </>
    )
  }

  return <></>
}

CollectionPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const ids = await getCollectionIds()

  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient()
  const id = context.params?.id as string

  await queryClient.prefetchQuery(["get_collection", id], () =>
    fetchCollection(id)
  )

  await queryClient.prefetchInfiniteQuery(
    ["get_collection_products", id],
    ({ pageParam }) => fetchInfinityCollectionProducts({ pageParam, id }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  )

  const queryData = await queryClient.getQueryData([`get_collection`, id])

  if (!queryData) {
    return {
      props: {
        notFound: true,
      },
    }
  }

  return {
    props: {
      // Work around see – https://github.com/TanStack/query/issues/1458#issuecomment-747716357
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      notFound: false,
    },
  }
}

export default CollectionPage
