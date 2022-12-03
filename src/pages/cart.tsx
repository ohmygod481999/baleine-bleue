import CartTemplate from "@modules/cart/templates"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import LoadScripts from "utils/LoadScripts"

const Cart: NextPageWithLayout = () => {
  return (
    <>
      <LoadScripts
        srcs={[
          "/assets/scripts/plugins.min.js",
          "/assets/scripts/script.js",
          // "/assets/scripts/pages/index.js",
        ]}
      />
      <Head title="Shopping Bag" description="View your shopping bag" />
      <CartTemplate />
    </>
  )
}

Cart.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Cart
