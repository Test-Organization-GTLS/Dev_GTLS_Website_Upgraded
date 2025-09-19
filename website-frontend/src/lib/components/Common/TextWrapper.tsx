type Props = {
  text: string;
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  bold: "light" | "normal" | "semi" | "bold" | "extra";
};

const TextWrapper = ({ text, size }: Props) => {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case "3xl":
        return "text-7xl leading-tight"; // largeTitle1: 72px
      case "2xl":
        return "text-6xl leading-tight"; // largeTitle2: 64px
      case "xl":
        return "text-5xl leading-tight"; // largeTitle3: 48px
      case "lg":
        return "text-4xl leading-tight"; // title1: 40px
      case "md":
        return "text-3xl leading-tight"; // title2: 32px
      case "sm":
        return "text-2xl leading-tight"; // title3: 24px
      case "xs":
        return "text-xl leading-tight"; // title4: 20px
      default:
        return "text-3xl leading-tight";
    }
  };

  const getBoldClasses = (bold: string) => {
    switch (bold) {
      case "light":
        return "font-light"; 
      case "2xl":
        return "text-6xl leading-tight"; // largeTitle2: 64px
      case "xl":
        return "text-5xl leading-tight"; // largeTitle3: 48px
      case "lg":
        return "text-4xl leading-tight"; // title1: 40px
      case "md":
        return "text-3xl leading-tight"; // title2: 32px
      case "sm":
        return "text-2xl leading-tight"; // title3: 24px
      case "xs":
        return "text-xl leading-tight"; // title4: 20px
      default:
        return "text-3xl leading-tight";
    }
  };

  return (
    <div className={`dm-sans-font font-normal ${getSizeClasses(size)} ${getBoldClasses(size)}`}>
      {text}
    </div>
  );
};

export default TextWrapper;
