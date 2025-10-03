import TextWrapper from "@/lib/components/Common/TextWrapper";
import { RecentPostsCardProps } from "@/lib/types";
import Image from "next/image";

export default function PostCard({
  title,
  date,
  description,
  image,
  href,
}: RecentPostsCardProps) {
  return (
    <div className="flex flex-row gap-4 bg-white">
      {/* Image */}
      <div className="relative overflow-hidden w-1/3 h-[150px] rounded-4xl ">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-0 h-[150px]  w-2/3 ">
        <TextWrapper
          text={title}
          fontFamily="funnel"
          styleType="title4"
          className=""
        />
        <TextWrapper
          text={date}
          fontFamily="dmSans"
          styleType="bodySmall"
          className="text-gold"
        />
        <TextWrapper
          text={description}
          fontFamily="dmSans"
          styleType="bodySmall"
          className="text-gray-600"
        />
      </div>
    </div>
  );
}
