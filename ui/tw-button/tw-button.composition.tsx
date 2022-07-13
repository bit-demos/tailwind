import React from 'react';
import { TwButton } from './tw-button.tailwind';

// import '@learn-bit-react/ui-library-wrappers.tailwind.configs.tailwind-config/styles.css';

export const BasicTwButton = () => (
  <TwButton text="Styled By Tailwind" className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded p-20"/>
);
