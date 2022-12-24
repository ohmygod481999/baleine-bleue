import { IS_BROWSER } from "@lib/constants"
import React, { createContext, useCallback, useContext, useEffect, useState } from "react"

interface MenuContext {
  toggle: () => void
  openMenu: () => void
  closeMenu: () => void
  isOpenMenu: boolean
}

const menuContext = createContext<MenuContext | null>(null)

interface MenuProviderProps {
  children?: React.ReactNode
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isOpen, setisOpen] = useState(false)

  const toggle = useCallback(() => {
    setisOpen(!isOpen)
  }, [isOpen])

  const openMenu = useCallback(() => {
    setisOpen(true)
  }, [isOpen])

  const closeMenu = useCallback(() => {
    setisOpen(false)
  }, [isOpen])
  
  useEffect(() => {
    if (IS_BROWSER) {
        document.addEventListener("keyup", (e) => {
            if (e.key === "Escape") {
                closeMenu()
            }
        })
    }
  }, [isOpen])
  

  return (
    <menuContext.Provider
      value={{
        toggle,
        closeMenu,
        openMenu,
        isOpenMenu: isOpen,
      }}
    >
      {children}
    </menuContext.Provider>
  )
}

export const useMenu = () => {
  const context = useContext(menuContext)
  if (context === null) {
    throw new Error("useMenu must be used within a MenuProvider")
  }
  return context
}
