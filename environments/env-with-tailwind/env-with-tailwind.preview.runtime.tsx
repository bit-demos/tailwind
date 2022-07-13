import React from 'react';
import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { EnvWithTailwindAspect } from './env-with-tailwind.aspect';
import '@learn-bit-react/ui-library-wrappers.tailwind.configs.tailwind-config/styles.css'; // <-- this is for shareable tw styles from a component

export class EnvWithTailwindPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    // react.registerProvider([
    //   ({ children }) => { 
    //     return <WrapperWithTailwindStyles>{children}</WrapperWithTailwindStyles>
    //   }
    // ])
    const envWithTailwindPreviewMain = new EnvWithTailwindPreviewMain();

    return envWithTailwindPreviewMain;
  }
}

EnvWithTailwindAspect.addRuntime(EnvWithTailwindPreviewMain);
