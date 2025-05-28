import { about } from "@/assets/common";
import { Container } from "@/components/layout/container/container";
import { useHomeDictionary } from "@/locales/hooks/use-home-dictionary";
import Image from "next/image";

export function HomeExplore() {
  const { translate } = useHomeDictionary();
  return (
    <Container className="max-w-none py-10 pb-20">
      <div className="flex flex-col items-center gap-y-12">
        <h2 className="text-center text-[4rem] max-w-2xl leading-none text-black uppercase font-medium">
          {translate("home.explore.title")}
        </h2>

        <button className="bg-black text-lg font-medium uppercase maven-font text-white px-16 py-4">
          {translate("home.explore.button")}
        </button>

        <div className="h-[40rem] mt-8 w-full relative">
          <Image
            src={about}
            alt="About us"
            fill
            className="w-full absolute top-0 left-0 h-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
}
