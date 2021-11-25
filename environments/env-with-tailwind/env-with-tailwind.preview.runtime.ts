import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';

import '@learn-bit-react/ui-library-wrappers.tailwind.configs.tailwind-config/styles.css'; // <-- this is for shareable tw styles from a component
// import './tailwind/styles.css' // <-- this is for locally defined tailwind styles

import { EnvWithTailwindAspect } from './env-with-tailwind.aspect';

export class EnvWithTailwindPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const envWithTailwindPreviewMain = new EnvWithTailwindPreviewMain();

    return envWithTailwindPreviewMain;
  }
}

EnvWithTailwindAspect.addRuntime(EnvWithTailwindPreviewMain);
