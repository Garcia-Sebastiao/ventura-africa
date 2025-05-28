import { about, banner } from "@/assets/common";
import { Logo } from "@/assets/logo";
import { Container } from "@/components/layout/container/container";
import { useHomeDictionary } from "@/locales/hooks/use-home-dictionary";
import Image from "next/image";

export function HomeAbout() {
  const { translate } = useHomeDictionary();
  return (
    <Container className="flex flex-col mt-[4rem] gap-y-[10rem]">
      <div className="flex w-full items-center relative">
        <div className="h-[40rem] w-[80%] relative">
          <Image
            src={about}
            alt="About us"
            fill
            className="w-full absolute top-0 left-0 h-full object-cover"
          />
        </div>

        <h4 className="text-[3.5rem] max-w-2xl right-0 z-10 font-medium uppercase absolute top-1/2 -translate-y-1/2 leading-tight">
          {translate("home.about.label")}
        </h4>
      </div>

      <div className="w-full flex flex-col gap-y-12 items-center justify-center">
        <div className="w-20 h-20 flex items-center justify-center">
          <Logo />
        </div>
        
        <p className="text-center text-4xl text-gray-700 leading-snug max-w-5xl mx-auto font-medium">
          {translate("home.about.description")}
        </p>
      </div>
    </Container>
  );
}
