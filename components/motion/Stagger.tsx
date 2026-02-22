// components/Stagger.tsx
"use client";

import { ReactElement, ReactNode, cloneElement, isValidElement } from "react";

type StaggerProps = {
  children: ReactNode;
  step?: number; // seconds between items, default 0.08
  startDelay?: number; // initial delay before the first child
};

export default function Stagger({
  children,
  step = 0.08,
  startDelay = 0,
}: StaggerProps) {
  let i = 0;
  const mapped = (Array.isArray(children) ? children : [children]).map(
    (child) => {
      if (!isValidElement(child)) return child;
      const delay = startDelay + i * step;
      i += 1;
      // Merge/override delay prop if child supports "delay"
      const existingDelay = (child as any).props?.delay;
      return cloneElement(
        child as ReactElement<any>,
        {
          delay: existingDelay ?? delay,
        } as any
      );
    }
  );
  return <>{mapped}</>;
}
