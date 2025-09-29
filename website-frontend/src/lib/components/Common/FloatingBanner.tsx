import Image from "next/image";
import TextWrapper from "./TextWrapper";
import { FloatingBannerProps } from "@/lib/types";
import { XIcon } from "lucide-react";

const FloatingBanner = ({ iconSrc, text, className }: FloatingBannerProps) => {
  return (
    <div
      className={`bg-creamy flex gap-4  rounded-b-3xl items-center p-4 px-14 z-50 shadow-xl ${
        className ?? ""
      }`}
    >
        <XIcon className="absolute -top-2 left-2 size-6 text-tint-gray p-1 bg-white rounded-full  cursor-pointer hover:text-tint-gray" />
      <div className="relative w-16 h-16">
        <Image src={iconSrc} alt={text} fill />
      </div>
      <TextWrapper
        text={text}
        fontFamily="dmSans"
        styleType="title4"
        className="text-tint-black mt-2"
      />
    </div>
  );
};

export default FloatingBanner;
