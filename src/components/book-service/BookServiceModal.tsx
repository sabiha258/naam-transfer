"use client";

import { useEffect } from "react";
import { useBookServiceModal } from "@/context/ModalContext";
import { BookServiceForm } from "./BookServiceForm";

export function BookServiceModal() {
  const { isOpen, closeModal, defaultServiceHref, defaultCity } = useBookServiceModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-lg rounded-3xl bg-surface border border-border p-2 sm:p-4 shadow-2xl animate-in zoom-in-95 duration-200">
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-foreground-dim hover:bg-border hover:text-foreground transition-colors z-20"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="p-2 sm:p-3">
          <BookServiceForm
            defaultServiceHref={defaultServiceHref}
            defaultCity={defaultCity}
            onSuccess={closeModal}
          />
        </div>
      </div>
    </div>
  );
}
