import CenterTitle from "@/lib/components/Common/CenterTitle";
import NewsCard from "@/lib/components/Common/NewsCard";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import NewsSlider from "../components/NewsSlider";
import { NewsData } from "@/lib/data";

const News = () => {
  return (
    <SectionContainer>
      <CenterTitle
        title="News"
        description="Stay updated with the latest news, industry trends, and behind the scenes stories from Gold Tiger. From expert tips to company milestones — our blog keeps you in the loop."
        buttonText={"Read More News"}
        buttonVariant={"default"}
      />
      <NewsSlider news={NewsData} />
    </SectionContainer>
  );
};
export default News;
