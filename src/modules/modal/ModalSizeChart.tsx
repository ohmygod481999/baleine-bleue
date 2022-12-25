import { Dialog } from "@headlessui/react"
import React from "react"

interface ModalSizeChartProps {
  isOpen: boolean
  setIsOpen: Function
}

function ModalSizeChart({ isOpen, setIsOpen }: ModalSizeChartProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative"
      style={{
        zIndex: 2001,
      }}
    >
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <Dialog.Panel className="w-full max-w-sm rounded bg-white z-10">
          <img src="/assets/img/size-chart-guide.png" alt="" />
          {/* <Dialog.Title>
            </Dialog.Title> */}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default ModalSizeChart
