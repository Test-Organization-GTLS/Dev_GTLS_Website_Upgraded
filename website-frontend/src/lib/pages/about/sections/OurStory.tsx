import ContentList from "@/lib/components/Common/ContentList";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { StoryData } from "@/lib/data";

const OurStory = () => {
  return (
    <SectionContainer>
      <ContentList data={StoryData} />
    </SectionContainer>
  );
};
export default OurStory;
