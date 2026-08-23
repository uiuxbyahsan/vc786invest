"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Global Framer config. `reducedMotion="user"` makes every motion component
 * respect the OS "reduce motion" setting — transform/rise animations are
 * disabled so content appears in place, honoring prefers-reduced-motion.
 */
export default function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
