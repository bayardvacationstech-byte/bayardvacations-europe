"use client";

import * as LucideIcons from "lucide-react";

/**
 * DynamicIcon Component
 * Renders a Lucide icon based on its string name.
 * Fallback to Compass if the icon name is not found.
 */
export default function DynamicIcon({ name, size = 24, className = "", strokeWidth = 2 }) {
  const IconComponent = LucideIcons[name] || LucideIcons.Compass;
  
  return <IconComponent size={size} className={className} strokeWidth={strokeWidth} />;
}
