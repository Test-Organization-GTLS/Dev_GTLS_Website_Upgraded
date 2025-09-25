import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/lib/ui/card";
import { GridCardProps } from "@/lib/types";
import Image from "next/image";
import TextWrapper from "./TextWrapper";

// Destructure the props you need: title, description, content, and footer.
// The `footer` prop is a good place to pass in a button or link.
const GridCard: React.FC<GridCardProps> = ({ title, description, content, footer ,icon}) => {
  return (
    <Card className="pb-20 hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-light-gold/10 border-0 shadow-none">
      <CardHeader>
        <Image
          src={icon}
          alt="MADs"
          width={80}
          height={80}
          priority
          fetchPriority="high"
          className="mt-6 mb-10"
        />
        <CardTitle className="text-gold">
          <TextWrapper text={title} fontFamily="dmSans" styleType="subtitle" />
          </CardTitle>
        {/* <CardDescription>{description}</CardDescription> */}
        {/* Pass the CardAction as a prop. This makes the component more flexible. */}
        {/* <CardAction>{footer}</CardAction> */}
      </CardHeader>
      <CardContent>
        {/* Render the content prop. You can use children here as well. */}
        <TextWrapper text={content} fontFamily="dmSans" styleType="bodySmall" />
      </CardContent>
      <CardFooter>
        {/* <p>{footer}</p> */}
      </CardFooter>
    </Card>
  );
};

export default GridCard;