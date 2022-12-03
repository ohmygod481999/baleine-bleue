import CheckoutTemplate from "@modules/checkout/templates"
import Head from "@modules/common/components/head"
import LoadScripts from "utils/LoadScripts"

const Checkout = () => {
  return (
    <>
      <LoadScripts
        srcs={[
          "/assets/scripts/plugins.min.js",
          "/assets/scripts/script.js",
          // "/assets/scripts/pages/index.js",
        ]}
      />
      <Head title="Checkout" />
      <CheckoutTemplate />
    </>
  )
}

export default Checkout
