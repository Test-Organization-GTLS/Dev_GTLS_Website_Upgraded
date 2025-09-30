import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import EnvironmentList from "@/lib/pages/environment&compliance/sections/EnvironmentList";

const Page = () => {
  return (
    <Container>
      <CommonHero
        title="Environment & Compliance"
        subtitle="Building a safer, greener future in logistics."
        description="We lead with eco-conscious practices, certified compliance, and a strong focus on safety and driver well-being — ensuring sustainable, responsible logistics."
        imageSrc="/webp/3movers.webp"
        cornerText="Subscribe"
        color="green"
      />
      <EnvironmentList />
    </Container>
  );
};

export default Page;
