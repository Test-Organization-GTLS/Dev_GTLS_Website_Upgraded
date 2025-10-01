import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { ServicesData } from "@/lib/data";

const Services = () => {
  return (
    <SectionContainer>
      <div className="space-y-20">
        {ServicesData.map((service, idx) => (
          <div
            key={idx}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              idx % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div>
              <CenterTitle
                title={service.title}
                description={service.description}
                listItems={service.listItems}
                buttonText={service.buttonText}
                buttonVariant={"default"}
                placement="left"
              />
            </div>
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Services;
