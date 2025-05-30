"use client";

import { usePathname } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";

const languages = {
  en: "English",
  pt: "Português",
  fr: "Français",
};

export function LanguageTrigger() {
  const pathname = usePathname();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (locale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|pt|fr)/, "") || "/";
    const newUrl = `/${locale}${pathWithoutLocale}`;
    window.location.href = newUrl;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-x-2 text-white hover:opacity-80 transition-opacity"
      >
        <span className="font-bold text-white maven-font uppercase">
          {locale.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[220px] z-50">
          {Object.entries(languages).map(([lang, label]) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full px-4 py-3 text-xl text-left maven-font hover:bg-gray-200 transition-colors ${
                lang === locale ? "bg-gray-50" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
