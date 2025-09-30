import HorizontalCard from "@/lib/components/Common/HorizontalCard";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { IndustriesData } from "@/lib/data";

const Industries = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-10">
        {IndustriesData.map((industry) => (
          <HorizontalCard key={industry.title} {...industry} />
        ))}
      </div>
    </SectionContainer>
  );
};
export default Industries;
