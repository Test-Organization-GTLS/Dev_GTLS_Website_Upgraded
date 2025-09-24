import CenterTitle from "@/lib/components/Common/CenterTitle";
import GridCard from "@/lib/components/Common/GridCard";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { GridCardProps } from "@/lib/types";
import { Button } from "@/lib/ui/button";

const serviceData: GridCardProps[] = [
  {
    id: 1,
    title: "Web Development",
    icon: "/Logos/logo-transparent.svg",
    description: "Building modern, responsive websites.",
    content: "We create custom websites using the latest technologies.",
    footer: "Learn More",
  },
  {
    id: 2,
    icon: "/Logos/logo-transparent.svg",
    title: "Mobile App Development",
    description: "Creating native and cross-platform mobile apps.",
    content: "We develop high-performance mobile applications.",
    footer: "Get a Quote",
  },
  {
    id: 3,
    icon: "/Logos/logo-transparent.svg",
    title: "Mobile App Development",
    description: "Creating native and cross-platform mobile apps.",
    content: "We develop high-performance mobile applications.",
    footer: "Get a Quote",
  },
  {
    id: 4,
    icon: "/Logos/logo-transparent.svg",
    title: "Mobile App Development",
    description: "Creating native and cross-platform mobile apps.",
    content: "We develop high-performance mobile applications.",
    footer: "Get a Quote",
  },
];

const Services = () => {
  return (
    <SectionContainer>
      <CenterTitle
        title="Services"
        description="We offer a wide range of services to help you achieve your goals."
        button={<Button size={"lg"} variant={"outline"} ><TextWrapper text="Contact us Now" fontFamily="dmSans" styleType="body" /></Button>}
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
