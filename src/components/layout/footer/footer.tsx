import { Logo } from "@/assets/logo";
import { Container } from "../container/container";
import { useHomeDictionary } from "@/locales/hooks/use-home-dictionary";
import Link from "next/link";
import { MailIcon, PhoneIcon } from "lucide-react";

export function Footer() {
  const { translate } = useHomeDictionary();
  return (
    <footer className="w-full pt-32 flex flex-col gap-y-40 bg-[#0F191A]">
      <div className="grid grid-cols-3 gap-x-32 px-12 justify-between ">
        <div className="flex [&>svg_*]:fill-white flex-col items-start">
          <Logo />

          <span className="text-white text-2xl font-medium mt-6 max-w-lg leading-relaxed">
            From iconic itineraries to expeditions into untouched Angola, we
            bring visions of wild Africa to life with pride and dedication.{" "}
          </span>
        </div>

        <ul className="flex flex-col items-start gap-y-6">
          <h4 className="text-white text-4xl font-medium maven-font ">
            {translate("home.footer.links.title")}
          </h4>

          <Link
            className="text-white transition-all hover:text-white/80 hover:border-b hover:border-b-white text-2xl font-medium"
            href="#about"
          >
            {translate("home.footer.links.about")}
          </Link>

          <Link
            className="text-white transition-all hover:text-white/80 hover:border-b hover:border-b-white text-2xl font-medium"
            href="#our-services"
          >
            {translate("home.footer.links.our-services")}
          </Link>

          <Link
            className="text-white transition-all hover:text-white/80 hover:border-b hover:border-b-white text-2xl font-medium"
            href="#places"
          >
            {translate("home.footer.links.places")}
          </Link>
        </ul>

        <ul className="flex flex-col items-start gap-y-6">
          <h4 className="text-white text-4xl font-medium maven-font ">
            {translate("home.footer.contact-us.title")}
          </h4>

          <div className="flex items-center gap-x-4">
            <PhoneIcon className="w-6 h-6 text-white" />
            <span className="text-white text-2xl font-medium">
              +244 922 222 222
            </span>
          </div>

          <div className="flex items-center gap-x-4">
            <MailIcon className="w-6 h-6 text-white" />
            <span className="text-white text-2xl font-medium">
              info@angolatravel.com
            </span>
          </div>
        </ul>
      </div>

      <div className="w-full px-12 border-t border-white/20 py-12">
        <p className="text-white text-2xl font-medium">
          &copy; {new Date().getFullYear()} {translate("home.footer.copy")}
        </p>
      </div>
    </footer>
  );
}
