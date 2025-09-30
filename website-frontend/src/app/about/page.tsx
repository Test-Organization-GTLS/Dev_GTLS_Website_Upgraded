import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import History from "@/lib/pages/about/sections/History";
import BannerSection from "@/lib/pages/about/sections/BannerSection";
import OurStory from "@/lib/pages/about/sections/OurStory";

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
      <History />
      <OurStory />
      <BannerSection />
    </Container>
  );
};

export default Page;
