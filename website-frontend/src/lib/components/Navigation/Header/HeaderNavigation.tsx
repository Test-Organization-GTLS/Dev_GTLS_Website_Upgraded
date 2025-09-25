import Image from "next/image";
import Container from "../../Containers/container";
import SectionContainer from "../../Containers/sectionContainer";

const HeaderNavigation = ({}) => {
  return (
    <div className="fixed top-0 z-50 h-24 bg-white w-full">
      <Container>
        <SectionContainer className="!pt-0 !pb-0">
          <div className="flex items-center h-full border-b-[1px]">
            <Image
              src={"/Logos/logo-transparent.svg"}
              alt="MADs"
              width={100}
              height={50}
              priority
              fetchPriority="high"
            />
          </div>
        </SectionContainer>
      </Container>
    </div>
  );
};
export default HeaderNavigation;
