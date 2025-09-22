type Props = {
  text: string;
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  bold: "light" | "normal" | "semi" | "bold" | "extra";
};

const TextWrapper = ({ text, size }: Props) => {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case "3xl":
        return "text-7xl leading-tight";
      case "2xl":
        return "text-6xl leading-tight";
      case "xl":
        return "text-5xl leading-tight";
      case "lg":
        return "text-4xl leading-tight";
      case "md":
        return "text-3xl leading-tight";
      case "sm":
        return "text-2xl leading-tight";
      case "xs":
        return "text-xl leading-tight";
      default:
        return "text-3xl leading-tight";
    }
  };

  const getBoldClasses = (bold: string) => {
    switch (bold) {
      case "light":
        return "font-light";
      case "2xl":
        return "text-6xl leading-tight";
      case "xl":
        return "text-5xl leading-tight";
      case "lg":
        return "text-4xl leading-tight";
      case "md":
        return "text-3xl leading-tight";
      case "sm":
        return "text-2xl leading-tight";
      case "xs":
        return "text-xl leading-tight";
      default:
        return "text-3xl leading-tight";
    }
  };

  return (
    <div
      className={`dm-sans-font font-normal test ${getSizeClasses(
        size
      )} ${getBoldClasses(size)}`}
    >
      {text}
    </div>
  );
};

export default TextWrapper;
