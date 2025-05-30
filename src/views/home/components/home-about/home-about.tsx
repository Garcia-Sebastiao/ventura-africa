"use client";

import { about, banner } from "@/assets/common";
import { Logo } from "@/assets/logo";
import { Container } from "@/components/layout/container/container";
import { useHomeDictionary } from "@/locales/hooks/use-home-dictionary";
import Image from "next/image";
import { motion } from "motion/react";

export function HomeAbout() {
  const { translate } = useHomeDictionary();
  return (
    <Container className="flex flex-col mt-[4rem] gap-y-[10rem]" id="about">
      <div className="flex w-full items-center relative">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="h-[40rem] w-[80%] relative"
        >
          <Image
            src={about}
            alt="About us"
            fill
            className="w-full absolute top-0 left-0 h-full object-cover"
          />
        </motion.div>

        <motion.h4
          initial={{ opacity: 0, x: - 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-[3.5rem] max-w-2xl right-0 z-10 font-medium uppercase absolute  leading-tight"
        >
          {translate("home.about.label")}
        </motion.h4>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col gap-y-12 items-center justify-center"
      >
        <div className="w-20 h-20 flex items-center justify-center">
          <Logo />
        </div>

        <p className="text-center text-4xl text-gray-700 leading-snug max-w-5xl mx-auto font-medium">
          {translate("home.about.description")}
        </p>
      </motion.div>
    </Container>
  );
}
