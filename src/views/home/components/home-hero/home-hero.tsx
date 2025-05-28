import { banner } from "@/assets/common";
import { Container } from "@/components/layout/container/container";
import { Header } from "@/components/layout/header/header";
import { useHomeDictionary } from "@/locales/hooks/use-home-dictionary";
import Image from "next/image";

export function HomeHero() {
  const { translate } = useHomeDictionary();
  return (
    <div className="w-full h-screen relative bg-gray-50">
      <Image
        src={banner}
        alt="banner"
        className="w-full brightness-75 absolute top-0 left-0 h-full object-cover"
        fill
      />
      <Container className="relative flex flex-col z-10 h-full">
        <Header />
        <div className="w-full flex items-center justify-center pt-[14rem]">
        <h1 className="text-4xl lg:text-[5rem] text-center font-cormorant leading-relaxed  text-white uppercase">
            {translate("home.hero.title")}
          </h1>
        </div>
      </Container>
    </div>
  );
}
