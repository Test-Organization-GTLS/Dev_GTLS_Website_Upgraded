import { Button } from "@/components/ui/button";
import Container from "@/lib/components/Containers/container";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import TitleWrapper from "@/lib/components/Common/TitleWrapper";

const Page = () => {
  return (
    <Container>
      <div className="!pt-30">
        <Button size={"lg"}>Contact us Now</Button>
        <TitleWrapper text="Title" size="xl" />
        <TextWrapper size="lg" text="Title" bold="extra"/> 
        Title Testing
      </div>
    </Container>
  );
};

export default Page;
