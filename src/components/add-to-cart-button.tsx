"use client";

import { useCart } from "@/context/cart-context";
import { ComponentProps } from "react";

interface AddToCartButtonProps extends ComponentProps<"button"> {
  productId: string;
}

export function AddToCartButton({ productId, ...props }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  return (
    <button
      type="button"
      onClick={() => addToCart(productId)}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      {...props}
    >
      Adicionar ao carrinho
    </button>
  );
}
