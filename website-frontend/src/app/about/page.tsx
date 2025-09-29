import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";

const Page = () => {
  return (
    <Container>
      <CommonHero
        title="Gold Tiger"
        subtitle="A Story of Ambition on Wheels..."
        description="Founded to solve real logistics challenges, Gold Tiger Logistics Solutions began with a single vision: to make freight and supply chain smarter, faster, and more reliable across Australia."
        imageSrc="/webp/3movers.webp"
        cornerText="Talk with an expert"
      />
    </Container>
  );
};

export default Page;
