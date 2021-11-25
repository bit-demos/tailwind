import React from 'react';

export type TwButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string,
  className: any
};

export function TwButton({ text, className }: TwButtonProps) {
  return (
    <button className={className}>
      {text}
    </button>
  );
}
