"use client";

import { useCart } from "@/context/cart-context";
import { ShoppingBag } from "lucide-react";
import { ComponentProps } from "react";

interface CartWidgetProps extends ComponentProps<"button"> {}

export function CartWidget({ ...props }: CartWidgetProps) {
  const { items } = useCart();
  return (
    <button className="flex items-center gap-2 text-sm" {...props}>
      <ShoppingBag className="w-4 h-4" />
      Cart ({items.length})
    </button>
  );
}
