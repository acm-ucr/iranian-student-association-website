"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import OurPhilanthropy from "@/public/philanthropy/ourPhilanthropy.svg";
import Handshake from "@/public/philanthropy/handshake.svg";
import ChildrenInternational from "@/public/philanthropy/childrenInternational.svg";
import IAWF from "@/public/philanthropy/IAWF.svg";
import ISCC from "@/public/philanthropy/ISCC.svg";
import Button from "@/components/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
}

const FadeInSection = ({ children, delay = 0 }: FadeInSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const Page = () => {
  return (
    <div className="max-w-screen w-screen flex-col justify-center text-center">
      <FadeInSection>
        <div className="m-10 mb-10 mt-2 justify-self-center sm:m-20 sm:mt-5">
          <Image
            src={OurPhilanthropy}
            width={1362}
            height={162}
            alt="Our Philanthropy Page Title"
          />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <div className="min-w-screen justify-self-center">
          <Image src={Handshake} width={1524} height={309} alt="Handshake" />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.3}>
        <div className="m-12 mb-8 mt-10 text-center font-[400] tracking-wider text-isa-dark-red sm:text-lg md:text-2xl lg:mb-12 lg:text-4xl lg:leading-[65px]">
          Our philanthropic partner for 2023-2024 is Child International is a
          non-political, non-sectarian volunteer based nonprofit organization
          that aims to provide equal opportunities for displaced and
          underprivileged children by empowering them, providing them access to
          education, housing and family assistance programs.
        </div>
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <Button
          link="https://easy-ware-forms.com/iscc-charity/donate"
          txt="Donate"
        />
      </FadeInSection>

      <FadeInSection delay={0.5}>
        <div className="m-6 mb-0 text-xl tracking-widest text-black sm:text-4xl md:text-5xl lg:text-6xl">
          Currently Supporting
        </div>
      </FadeInSection>

      <FadeInSection delay={0.6}>
        <div className="flex items-center justify-center">
          <div className="h-1/2 w-1/4">
            <Image
              src={ISCC}
              width={450}
              height={235}
              alt="International Society for Children with Cancer Logo"
            />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.7}>
        <div className="m-6 mb-0 mt-8 text-xl tracking-widest text-black sm:text-4xl md:text-5xl lg:mt-12 lg:text-6xl">
          Previously Supported
        </div>
      </FadeInSection>

      <FadeInSection delay={0.8}>
        <div className="mb-11 ml-10 mr-10 flex justify-center gap-12 sm:ml-8 sm:mr-8 md:ml-16 md:mr-16">
          <div className="h-1/2 w-1/4">
            <Image
              src={ChildrenInternational}
              width={467}
              height={235}
              alt="Children International Logo"
            />
          </div>
          <div className="h-1/2 w-1/4">
            <Image
              src={IAWF}
              width={590}
              height={278}
              alt="Iranian American Women Foundation Logo"
            />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Page;
