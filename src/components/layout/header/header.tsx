import { Logo } from "@/assets/logo";
import { ChevronDown, MenuIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { LanguageTrigger } from "@/components/language-trigger/language-trigger";

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
        <LanguageTrigger />
      </div>
    </header>
  );
}
