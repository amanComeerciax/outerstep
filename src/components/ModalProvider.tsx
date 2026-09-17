"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import BookCallModal from "./BookCallModal"

interface ModalContextType {
  openModal: (productName?: string) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState("")

  const openModal = (productName?: string) => {
    if (productName && typeof productName === "string") {
      setSelectedProduct(productName)
    } else {
      setSelectedProduct("")
    }
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <BookCallModal
        isOpen={modalOpen}
        onClose={closeModal}
        initialProduct={selectedProduct}
      />
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}
