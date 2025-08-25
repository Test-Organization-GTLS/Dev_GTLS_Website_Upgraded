import Image from "next/image";
import Container from "../../Containers/container";

const HeaderNavigation = ({}) => {
  return (
    <div className="fixed top-0 z-50 h-24 w-full">
      <Container>
        <div className="flex items-center h-full">
          <Image
            src={"/Logos/logo-transparent.svg"}
            alt="MADs"
            width={100}
            height={50}
            priority
            fetchPriority="high"
          />
        </div>
      </Container>
    </div>
  );
};
export default HeaderNavigation;
