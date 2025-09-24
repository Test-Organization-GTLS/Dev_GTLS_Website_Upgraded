import { Button } from "@/lib/ui/button";
import Container from "@/lib/components/Containers/container";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import TitleWrapper from "@/lib/components/Common/TitleWrapper";
import Services from "@/lib/pages/home/sections/services";

const Page = () => {
  return (
    <Container>
      <div className="!pt-30">
        <Button size={"lg"}>Contact us Now</Button>
        <TitleWrapper text="Title" size="xl" />
        <TextWrapper text="test" fontFamily="funnel" styleType="title1" /> 
        Title
      </div>
      <Services />
    </Container>
  );
};

export default Page;
