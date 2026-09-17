"use client";

import { useBookServiceModal } from "@/context/ModalContext";
import { Button } from "@/components/ui/Button";

export function StartNameTransferButton({
  children = "Start my Name Transfer",
  className = "",
  variant = "primary",
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const { openModal } = useBookServiceModal();

  return (
    <Button
      variant={variant}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        openModal();
      }}
    >
      {children}
    </Button>
  );
}
