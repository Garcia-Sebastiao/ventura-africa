import { about } from "@/assets/common";
import { Container } from "@/components/layout/container/container";
import { useHomeDictionary } from "@/locales/hooks/use-home-dictionary";
import Image from "next/image";

export function HomeGalleries() {
  const { translate } = useHomeDictionary();
  return (
    <div className="w-full flex flex-col gap-y-12 items-center bg-[#990000] py-20">
      <div className="flex w-full items-center gap-x-32">
        <div className="flex-1 h-[1px] bg-white" />

        <h2 className="text-center text-[4rem] max-w-md leading-none text-white font-medium">
          {translate("home.destinations.title")}
        </h2>

        <div className="flex-1 h-[1px] bg-white" />
      </div>

      <p className="text-2xl text-center max-w-3xl font-medium text-white">
        {translate("home.destinations.label")}
      </p>

      <div className="w-full px-4 lg:px-16 mt-10 flex flex-col gap-y-8">
        <div className="w-full grid grid-cols-2 gap-8">
          <div className="h-[44rem] flex items-center justify-center w-full relative">
            <Image
              src={about}
              alt="About us"
              fill
              className="w-full brightness-[60%] absolute top-0 left-0 h-full object-cover"
            />

            <span className="text-[3.5rem] uppercase relative z-10 text-white">
              BENGUELA
            </span>
          </div>

          <div className="h-[44rem] flex items-center justify-center w-full relative">
            <Image
              src={about}
              alt="About us"
              fill
              className="w-full brightness-[60%] absolute top-0 left-0 h-full object-cover"
            />

            <span className="text-[3.5rem] uppercase relative z-10 text-white">
              LUANDA
            </span>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 gap-8">
          <div className="h-[50rem] flex items-center justify-center w-full relative">
            <Image
              src={about}
              alt="About us"
              fill
              className="w-full brightness-[60%] absolute top-0 left-0 h-full object-cover"
            />

            <span className="text-[3.5rem] uppercase relative z-10 text-white">
              NAMIBE
            </span>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-8">
          <div className="h-[44rem] flex items-center justify-center w-full relative">
            <Image
              src={about}
              alt="About us"
              fill
              className="w-full brightness-[60%] absolute top-0 left-0 h-full object-cover"
            />

            <span className="text-[3.5rem] uppercase relative z-10 text-white">
              BENGUELA
            </span>
          </div>

          <div className="h-[44rem] flex items-center justify-center w-full relative">
            <Image
              src={about}
              alt="About us"
              fill
              className="w-full brightness-[60%] absolute top-0 left-0 h-full object-cover"
            />

            <span className="text-[3.5rem] uppercase relative z-10 text-white">
              LUANDA
            </span>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 gap-8">
          <div className="h-[50rem] flex items-center justify-center w-full relative">
            <Image
              src={about}
              alt="About us"
              fill
              className="w-full brightness-[60%] absolute top-0 left-0 h-full object-cover"
            />

            <span className="text-[3.5rem] uppercase relative z-10 text-white">
              NAMIBE
            </span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mt-[4rem] flex items-center px-16 flex-col">
        <div className="w-full  max-w-4xl flex flex-col items-start mx-auto">
          <span className="text-[6rem] text-white font-bold italic self-start">
            “
          </span>

          <span className="text-5xl italic text-center text-white font-medium leading-tight">
            {translate("home.founder-speech.label")}
          </span>
        </div>

        <div className="w-full mt-10 flex items-center gap-x-6">
          <div className="flex-1 h-[2px] bg-black" />
          <span className="font-semibold uppercase maven-font text-xl">
            Irene Boaventura | Travel Designer - Founder
          </span>
        </div>
      </div>
    </div>
  );
}
