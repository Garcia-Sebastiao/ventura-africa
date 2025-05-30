"use client";
import { about } from "@/assets/common";
import { useHomeDictionary } from "@/locales/hooks/use-home-dictionary";
import { CableCar, MapPinHouse, Plane, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export function HomeExperience() {
  const { translate } = useHomeDictionary();

  return (
    <div
      id="our-services"
      className="w-full flex flex-col gap-y-12 items-center pb-40 bg-[#990000] py-20"
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
          className="text-center text-[4rem] uppercase max-w-md leading-none text-white font-medium"
        >
          {translate("home.experience.title")}
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
        {translate("home.experience.label")}
      </motion.p>

      <div className="w-full px-4 lg:px-12 grid mt-20 grid-cols-2 gap-x-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="h-[46rem] flex items-center justify-center w-full relative"
        >
          <Image
            src={about}
            alt="About us"
            fill
            className="w-full absolute top-0 left-0 h-full object-cover"
          />
        </motion.div>

        <div className="w-full mt-20 grid grid-cols-2 gap-x-20 gap-y-8 px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="col-span-1  flex flex-col items-start gap-y-4"
          >
            <Plane className="text-white w-10 h-10" />

            <h6 className="text-3xl max-w-sm text-white maven-font font-medium text-left">
              {translate("home.experience.items.adventure.title")}
            </h6>

            <p className="text-left text-white text-3xl font-medium">
              {translate("home.experience.items.adventure.label")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="col-span-1  flex flex-col items-start gap-y-4"
          >
            <CableCar className="text-white w-10 h-10" />

            <h6 className="text-3xl max-w-sm text-white maven-font font-medium text-left">
              {translate("home.experience.items.creative.title")}
            </h6>

            <p className="text-left text-white text-3xl font-medium">
              {translate("home.experience.items.creative.label")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="col-span-1  flex flex-col items-start gap-y-4"
          >
            <Star className="text-white w-10 h-10" />

            <h6 className="text-3xl max-w-sm text-white maven-font font-medium text-left">
              {translate("home.experience.items.curators.title")}
            </h6>

            <p className="text-left text-white text-3xl font-medium">
              {translate("home.experience.items.curators.label")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="col-span-1  flex flex-col items-start gap-y-4"
          >
            <MapPinHouse className="text-white w-10 h-10" />

            <h6 className="text-3xl max-w-sm text-white maven-font font-medium text-left">
              {translate("home.experience.items.destination.title")}
            </h6>

            <p className="text-left text-white text-3xl font-medium">
              {translate("home.experience.items.destination.label")}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
