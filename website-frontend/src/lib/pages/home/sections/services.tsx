import CenterTitle from "@/lib/components/Common/CenterTitle";
import GridCard from "@/lib/components/Common/GridCard";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { serviceData } from "@/lib/data";

const Services = () => {
  return (
    <SectionContainer>
      <CenterTitle
        title="Services"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceData.map((service) => (
          <GridCard key={service.id} {...service} />
        ))}
      </div>
    </SectionContainer>
  );
};
export default Services;
