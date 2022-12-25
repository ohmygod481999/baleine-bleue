import React, { useMemo, useState } from "react"
import { Dialog } from "@headlessui/react"
import { Product } from "types/medusa"
import ProductInfo from "@modules/products/templates/product-info"
import ProductTabs from "@modules/products/components/product-tabs"
import { ProductProvider } from "@lib/context/product-context"

function ModalProduct({
  isOpen,
  setIsOpen,
  currentProduct,
  setCurrentProduct,
  products,
}: {
  isOpen: boolean
  setIsOpen: Function
  currentProduct: Product | null
  setCurrentProduct: Function
  products: Product[] | undefined
}) {
  let [isVariantDialogOpen, setIsVariantDialogOpen] = useState(true)

  const orderCurrent = useMemo(() => {
    if (currentProduct?.id && products) {
      let i = 0
      for (let p of products) {
        if (p.id === currentProduct.id) {
          return i
        }
        i += 1
      }
    }
    return 0
  }, [currentProduct, products])

  const orderNext = useMemo(() => {
    if (products) {
      if (orderCurrent === products.length - 1) {
        return 0
      }
      return orderCurrent + 1
    }
    return 0
  }, [orderCurrent])

  const orderPrev = useMemo(() => {
    if (products) {
      if (orderCurrent === 0) {
        return products.length - 1
      }
      return orderCurrent - 1
    }
    return 0
  }, [orderCurrent])

  return (
    <>
      <Dialog
        open={isVariantDialogOpen}
        onClose={() => setIsVariantDialogOpen(false)}
        className="relative"
        style={{
          zIndex: 2001,
        }}
      >
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded bg-white">
            <Dialog.Title>Complete your order</Dialog.Title>
          </Dialog.Panel>
        </div>
      </Dialog>

      <div
        id="lightcase-overlay"
        style={{
          opacity: "0.9",
          display: isOpen ? "flex" : "none",
          cursor: "pointer",
          top: 0,
          left: 0,
          height: "100vh",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          // id="lightcase-case"
          className="basis-2/3"
          aria-hidden="false"
          role="dialog"
          style={{
            opacity: 1,
            display: isOpen ? "block" : "none",
            // width: "666.656px",
            position: "relative",
            // marginTop: "-265px",
            // marginLeft: "-333px",
            // top: "50%",
          }}
          data-lc-type="image"
        >
          <div id="lightcase-content">
            <div
              className="lightcase-contentInner"
              style={{
                opacity: 1,
                // width: "666.664px",
                height: "500px",
                maxWidth: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                // src="/assets/img/portfolio/1.jpg"
                src={
                  currentProduct && currentProduct.thumbnail
                    ? currentProduct.thumbnail
                    : "/assets/img/portfolio/1.jpg"
                }
                style={{ maxWidth: "789px", maxHeight: "500px" }}
                onClick={() => {
                  setIsVariantDialogOpen(true)
                }}
              />
            </div>
          </div>
          <div id="lightcase-info">
            <div id="lightcase-sequenceInfo">
              {orderCurrent + 1} of {products?.length}
            </div>
            <h4 id="lightcase-title" style={{ display: "none" }} />
            <p id="lightcase-caption" style={{ display: "none" }} />
          </div>
        </div>
        <div className="basis-1/3 text-left">
          <div
            className="small:sticky small:top-20 w-full py-8 small:py-0 small:max-w-[344px] medium:max-w-[400px] flex flex-col gap-y-12"
            // ref={info}
          >
            {currentProduct && (
              <ProductProvider product={currentProduct}>
                <ProductInfo product={currentProduct} />
              </ProductProvider>
            )}
            {/* {currentProduct && (
              <ProductTabs product={currentProduct} />

            )} */}
          </div>
        </div>
      </div>
      <div
        id="lightcase-loading"
        className="lightcase-icon-spin"
        style={{ display: "none" }}
      />

      <div
        style={{
          display: isOpen ? "block" : "none",
        }}
        id="lightcase-nav"
        data-lc-ispartofsequence="true"
      >
        <a
          href="#"
          className="lightcase-icon-close"
          style={{ opacity: 1 }}
          onClick={() => {
            setIsOpen(false)
          }}
        >
          <span>Close</span>
        </a>
        <a
          href="#"
          className="lightcase-icon-prev"
          style={{}}
          onClick={(e) => {
            e.preventDefault()
            if (products) {
              setCurrentProduct(products[orderPrev])
            }
          }}
        >
          <span>Prev</span>
        </a>
        <a
          href="#"
          className="lightcase-icon-next"
          style={{}}
          onClick={(e) => {
            e.preventDefault()
            if (products) {
              setCurrentProduct(products[orderNext])
            }
          }}
        >
          <span>Next</span>
        </a>
        <a href="#" className="lightcase-icon-play" style={{ display: "none" }}>
          <span>Play</span>
        </a>
        <a
          href="#"
          className="lightcase-icon-pause"
          style={{ display: "none" }}
        >
          <span>Pause</span>
        </a>
      </div>
    </>
  )
}

export default ModalProduct
