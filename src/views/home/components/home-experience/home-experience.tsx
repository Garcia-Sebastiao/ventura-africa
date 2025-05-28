import { useHomeDictionary } from "@/locales/hooks/use-home-dictionary";

export function HomeExperience() {
  const { translate } = useHomeDictionary();
  return (
    <div className="w-full flex flex-col gap-y-12 items-center bg-[#990000] py-20">
      <div className="flex w-full items-center gap-x-32">
        <div className="flex-1 h-[1px] bg-white" />

        <h2 className="text-center text-[4rem] uppercase max-w-md leading-none text-white font-medium">
          {translate("home.experience.title")}
        </h2>

        <div className="flex-1 h-[1px] bg-white" />
      </div>

      <p className="text-2xl text-center max-w-3xl font-medium text-white">
        {translate("home.experience.label")}
      </p>
    </div>
  );
}
