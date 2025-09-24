import { typography } from '@/lib/typography';
import React from 'react';

// Define the typography systems' font families and style types for type safety.
type FontFamilies = keyof typeof typography;
type StyleTypes = keyof typeof typography['funnel']['styles'] | keyof typeof typography['dmSans']['styles'];

interface TextWrapperProps {
  text: string;
  fontFamily: FontFamilies;
  styleType: StyleTypes;
}

const TextWrapper: React.FC<TextWrapperProps> = ({ text, fontFamily, styleType }) => {
  const fontCategory = typography[fontFamily];

  // Safely look up the style from the typography object.
  const style = fontCategory?.styles?.[styleType as keyof typeof fontCategory.styles];

  if (!fontCategory || !style) {
    console.error(`Invalid font family or styleType: ${fontFamily} - ${styleType}`);
    // Provide a basic fallback style to prevent a crash.
    return <span>{text}</span>;
  }
  
  const combinedStyles: React.CSSProperties = {
    fontFamily: fontCategory.fontFamily,
    ...style,
  };

  return (
    <span style={combinedStyles}>
      {text}
    </span>
  );
};

export default TextWrapper;
