"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: (defaultServiceHref?: string, defaultCity?: string) => void;
  closeModal: () => void;
  defaultServiceHref?: string;
  defaultCity?: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function BookServiceModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultServiceHref, setDefaultServiceHref] = useState<string | undefined>();
  const [defaultCity, setDefaultCity] = useState<string | undefined>();

  const openModal = (serviceHref?: string, city?: string) => {
    setDefaultServiceHref(serviceHref);
    setDefaultCity(city);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        defaultServiceHref,
        defaultCity,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useBookServiceModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useBookServiceModal must be used within a BookServiceModalProvider");
  }
  return context;
}
