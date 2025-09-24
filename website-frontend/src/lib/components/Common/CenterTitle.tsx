import React from 'react';

// Define the new interface for the component's props
import { CenterTitleProps } from '@/lib/types';

const CenterTitle: React.FC<CenterTitleProps> = ({ title, description, button }) => {
  return (
    <div className="text-center my-10">
      <h2 className="text-3xl font-bold funnel-font leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {/* Conditionally render the description if it exists */}
      {description && <p className="mt-4 text-lg text-gray-600">{description}</p>}
      {/* Conditionally render the button if it exists */}
      {button && <div className="mt-8">{button}</div>}
    </div>
  );
};

export default CenterTitle;