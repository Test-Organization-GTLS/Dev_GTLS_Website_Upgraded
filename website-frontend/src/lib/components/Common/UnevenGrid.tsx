import { UnevenGridProps } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/ui/card";
import Image from "next/image";
import TextWrapper from "./TextWrapper";

const UnevenGrid = ({ items }: UnevenGridProps) => {
  const cols = 4;
  const rowSpan = 2;

  return (
    <div>
      <div className="hidden lg:grid grid-cols-4 grid-rows-5 gap-10">
        {items?.map((item, index) => {
          const col = (index % cols) + 1; // Tailwind columns start at 1

          // Determine which "block" of 4 items this is (0 for first 4, 1 for next 4)
          const block = Math.floor(index / cols);

          // Columns 1 & 3 start on row 1 + block offset, columns 2 & 4 start on row 2 + block offset
          const isEvenCol = (col - 1) % 2 === 0;
          const rowStart = (isEvenCol ? 1 : 2) + block * 2;

          return (
            <Card
              key={index}
              className={`rounded-4xl col-start-${col} row-start-${rowStart} row-span-${rowSpan}`}
            >
              <CardHeader className="relative h-44">
                <Image
                  src={item?.picture}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </CardHeader>
              <CardContent className="h-10 flex items-center justify-center text-center">
                <TextWrapper
                  text={item.title}
                  fontFamily="dmSans"
                  styleType="subtitle"
                />
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-10">
        {items?.map((item, index) => {
          return (
            <Card
              key={index}
              className={`rounded-4xl `}
            >
              <CardHeader className="relative h-44">
                <Image
                  src={item?.picture}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </CardHeader>
              <CardContent className="h-10 flex items-center justify-center text-center">
                <TextWrapper
                  text={item.title}
                  fontFamily="dmSans"
                  styleType="subtitle"
                />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default UnevenGrid;
