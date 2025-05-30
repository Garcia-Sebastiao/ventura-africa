"use client";
import { about } from "@/assets/common";
import { useHomeDictionary } from "@/locales/hooks/use-home-dictionary";
import Image from "next/image";
import { motion } from "motion/react";

export function HomeGalleries() {
  const { translate } = useHomeDictionary();
  return (
    <div
      className="w-full flex flex-col gap-y-12 items-center bg-[#990000] py-20"
      id="places"
    >
      <div className="flex w-full items-center gap-x-32">
        <motion.div
          initial={{ opacity: 0, x: -600 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 h-[1px] bg-white"
        />

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-[4rem] max-w-md leading-none text-white font-medium"
        >
          {translate("home.destinations.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 600 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 h-[1px] bg-white"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl text-center max-w-3xl font-medium text-white"
      >
        {translate("home.destinations.label")}
      </motion.p>

      <div className="w-full px-4 lg:px-16 mt-10 flex flex-col gap-y-8">
        <div className="w-full grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="h-[44rem] flex items-center justify-center w-full relative"
          >
            <Image
              src={about}
              alt="About us"
              fill
              className="w-full brightness-[60%] absolute top-0 left-0 h-full object-cover"
            />

            <span className="text-[3.5rem] uppercase relative z-10 text-white">
              BENGUELA
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="h-[44rem] flex items-center justify-center w-full relative"
          >
            <Image
              src={about}
              alt="About us"
              fill
              className="w-full brightness-[60%] absolute top-0 left-0 h-full object-cover"
            />

            <span className="text-[3.5rem] uppercase relative z-10 text-white">
              LUANDA
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full grid grid-cols-1 gap-8"
        >
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
        </motion.div>

        <div className="w-full grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="h-[44rem] flex items-center justify-center w-full relative"
          >
            <Image
              src={about}
              alt="About us"
              fill
              className="w-full brightness-[60%] absolute top-0 left-0 h-full object-cover"
            />

            <span className="text-[3.5rem] uppercase relative z-10 text-white">
              BENGUELA
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="h-[44rem] flex items-center justify-center w-full relative"
          >
            <Image
              src={about}
              alt="About us"
              fill
              className="w-full brightness-[60%] absolute top-0 left-0 h-full object-cover"
            />

            <span className="text-[3.5rem] uppercase relative z-10 text-white">
              LUANDA
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full grid grid-cols-1 gap-8"
        >
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
        </motion.div>
      </div>

      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
       className="w-full max-w-6xl mt-[4rem] flex items-center px-16 flex-col">
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
      </motion.div>
    </div>
  );
}
