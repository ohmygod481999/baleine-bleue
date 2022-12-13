import React, { useState } from "react"
import { Dialog } from "@headlessui/react"

function ModalProduct({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Function
}) {
  let [isVariantDialogOpen, setIsVariantDialogOpen] = useState(true)

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
          display: isOpen ? "block" : "none",
          cursor: "pointer",
        }}
      />
      <div
        id="lightcase-loading"
        className="lightcase-icon-spin"
        style={{ display: "none" }}
      />

      <div
        id="lightcase-case"
        aria-hidden="false"
        role="dialog"
        style={{
          opacity: 1,
          display: isOpen ? "block" : "none",
          width: "666.656px",
          marginTop: "-265px",
          marginLeft: "-333px",
          top: "50%",
        }}
        data-lc-type="image"
      >
        <div id="lightcase-content">
          <div
            className="lightcase-contentInner"
            style={{
              opacity: 1,
              width: "666.664px",
              height: "500px",
              maxWidth: "100%",
            }}
          >
            <img
              src="/assets/img/portfolio/1.jpg"
              style={{ maxWidth: "789px", maxHeight: "500px" }}
              onClick={() => {
                setIsVariantDialogOpen(true)
              }}
            />
          </div>
        </div>
        <div id="lightcase-info">
          <div id="lightcase-sequenceInfo">1 of 6</div>
          <h4 id="lightcase-title" style={{ display: "none" }} />
          <p id="lightcase-caption" style={{ display: "none" }} />
        </div>
      </div>
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
        <a href="#" className="lightcase-icon-prev" style={{}}>
          <span>Prev</span>
        </a>
        <a href="#" className="lightcase-icon-next" style={{}}>
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
