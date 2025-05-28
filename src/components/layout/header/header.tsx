import { Logo } from "@/assets/logo";
import { ChevronDown, MenuIcon, SearchIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full py-8 flex items-center justify-between">
      <button>
        <MenuIcon className="w-8 h-8 text-white" />
      </button>

      <Link href="/" className="text-white text-2xl font-medium">
        <div className="w-20 [&>svg_*]:fill-white h-20 flex items-center justify-center">
          <Logo />
        </div>
      </Link>

      <div className="flex items-center gap-x-4">
        <button className="flex items-center gap-x-2">
          <span className="text-white font-bold">EN</span>
          <ChevronDown className="w-5 h-5 text-white" />
        </button>
      </div>
    </header>
  );
}
