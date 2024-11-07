import React from "react";
import Image from "next/image";
import OurPhilanthropy from "@/public/philanthropy/ourPhilanthropy.svg";
import Handshake from "@/public/philanthropy/handshake.svg";
import ChildrenInternational from "@/public/philanthropy/childrenInternational.svg";
import IAWF from "@/public/philanthropy/IAWF.svg";
import ISCC from "@/public/philanthropy/ISCC.svg";
import Button from "@/components/button";

const page = () => {
  return (
    <div className="max-w-screen flex-col justify-center text-center">
      <div className="m-20 mb-10">
        <Image
          src={OurPhilanthropy}
          width={1362}
          height={162}
          alt="Our Philanthropy Page Title"
        />
      </div>

      <Image src={Handshake} width={1524} height={309} alt="Handshake" />

      <div className="m-12 mt-10 text-center text-4xl font-[400] leading-[65px] tracking-wider text-isa-dark-red">
        Our philanthropic partner for 2023-2024 is Child International is a
        non-political, non-sectarian volunteer based nonprofit organization that
        aims to provide equal opportunities for displaced and underprivileged
        children by empowering them, providing them access to education, housing
        and family assistance programs.
      </div>

      <Button
        link="https://easy-ware-forms.com/iscc-charity/donate"
        txt="Donate"
      />
      <div className="m-6 mb-0 text-6xl tracking-widest text-black">
        Currently Supporting
      </div>

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

      <div className="m-6 mb-0 text-6xl tracking-widest text-black">
        Previously Supported
      </div>

      <div className="mb-5 flex justify-center gap-12">
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
    </div>
  );
};

export default page;
