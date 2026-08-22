// Shared animation values — every component references these so motion is
// consistent sitewide. Uses opacity + transform only (60fps-safe).

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

export const staggerContainer = (staggerMs: number = 80) => ({
  whileInView: {
    transition: { staggerChildren: staggerMs / 1000 },
  },
  viewport: { once: true, amount: 0.2 },
});

// Values reused for on-load hero entrance (played immediately, not on scroll).
export const fadeUpLoad = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;
