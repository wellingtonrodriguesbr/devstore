import Link from "next/link";
import Image from "next/image";

import { Search, ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="w-5 h-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-sm">
          <ShoppingBag className="w-4 h-4" />
          Cart (0)
        </button>
        <div className="w-px h-4 bg-zinc-700 "></div>
        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            className="h-6 w-6 rounded-full"
            src="https://github.com/wellingtonrodriguesbr.png"
            alt=""
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  );
}
