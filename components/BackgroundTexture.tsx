'use client';

import { motion, useScroll, useTransform, MotionStyle } from "framer-motion";
import { ReactNode } from "react";

interface BackgroundTextureProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dotRadius?: number;
  dotSpacing?: string;
  dotOpacity?: number;
  scrollSpeedX?: number;
  scrollSpeedY?: number;
}

export default function BackgroundTexture({
  children,
  className = "",
  id,
  dotRadius = 1,
  dotSpacing = "10px",
  dotOpacity = 0.15,
  scrollSpeedX = 0,
  scrollSpeedY = 0,
}: BackgroundTextureProps) {
  const { scrollYProgress } = useScroll();
  const backgroundX = useTransform(scrollYProgress, [0, 1], ['0%', `${scrollSpeedX}%`]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', `${scrollSpeedY}%`]);

  const style: MotionStyle = {
    backgroundImage: `radial-gradient(rgba(0, 0, 0, ${dotOpacity}) ${dotRadius}px, transparent ${dotRadius}px)`,
    backgroundSize: `${dotSpacing} ${dotSpacing}`,
    backgroundPositionX: backgroundX,
    backgroundPositionY: backgroundY,
  };

  return (
    <motion.div id={id} className={className} style={style}>
      {children}
    </motion.div>
  );
}
