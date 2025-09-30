import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import Industries from "@/lib/pages/industries/sections/Industries";

const Page = () => {
  return (
    <Container>
      <CommonHero
        title="Industries We Serve"
        subtitle="Tailored Logistics for Every Sector."
        description="At Gold Tiger Logistics Solutions, we understand that every industry moves differently. That’s why we deliver industry-specific solutions — built for speed, precision, and growth."
        imageSrc="/webp/3movers.webp"
        cornerText="Talk with an expert"
      />
      <Industries />
    </Container>
  );
};

export default Page;
