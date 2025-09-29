import TextWrapper from "@/lib/components/Common/TextWrapper";
import { BannerProps } from "@/lib/types";
import Image from "next/image";

const Banner: React.FC<BannerProps> = ({ title, description, imageSrc, imageAlt = "Banner Image" }) => {
  return (
    <div className="bg-creamy rounded-t-4xl flex gap-10 flex-col items-center md:flex-row rounded-br-4xl p-10">
      {/* Left Content */}
      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <TextWrapper
          text={title}
          fontFamily="funnel"
          styleType="title1"
          className="text-gold"
        />
        <TextWrapper
          text={description}
          fontFamily="dmSans"
          styleType="bodySmall"
          className="text-tint-black"
        />
      </div>

      {/* Right Content */}
      <div className="relative mx-auto">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
