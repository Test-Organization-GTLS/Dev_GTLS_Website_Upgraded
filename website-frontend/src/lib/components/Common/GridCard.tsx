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
const GridCard: React.FC<GridCardProps> = ({ title, description, content, footer }) => {
  return (
    <Card className="pb-20 hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-light-gold/10 border-0 shadow-none">
      <CardHeader>
        <Image
          src="/Logos/logo-transparent.svg"
          alt="MADs"
          width={100}
          height={100}
          priority
          fetchPriority="high"
          className="mt-6 mb-10"
        />
        <CardTitle className="text-gold dm-sans-font">
          <TextWrapper text={title} fontFamily="dmSans" styleType="subtitle" />
          </CardTitle>
        {/* <CardDescription>{description}</CardDescription> */}
        {/* Pass the CardAction as a prop. This makes the component more flexible. */}
        {/* <CardAction>{footer}</CardAction> */}
      </CardHeader>
      <CardContent>
        {/* Render the content prop. You can use children here as well. */}
        <p className="dm-sans-font">{description}</p>
      </CardContent>
      <CardFooter>
        {/* <p>{footer}</p> */}
      </CardFooter>
    </Card>
  );
};

export default GridCard;