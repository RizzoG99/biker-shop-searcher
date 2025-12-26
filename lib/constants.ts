/**
 * Design System Constants
 * Based on the design mockups in docs/mockup/
 */

export const COLORS = {
  primary: "#f26c0d",          // Burnt Orange
  accent: "#6d28d9",           // Deep Purple
  backgroundDark: "#181411",   // Near Black
  cardDark: "#27201b",         // Dark Card Background
  cardGraphite: "#392f28",     // Dark Graphite
  borderDark: "#392f28",       // Border color
  textSecondary: "#baa89c",    // Beige/Gray for secondary text
  textMuted: "#6B7280",        // Steel Gray
  backgroundLight: "#F8F7F5",  // Off White
} as const;

export const NAV_ITEMS = [
  { label: "Gear Search", href: "#" },
  { label: "Outfit Builder", href: "#" },
  { label: "Deals", href: "#" },
  { label: "My Garage", href: "#" },
] as const;

export const RIDING_STYLES = [
  "Sport Touring",
  "Sport",
  "Cruiser",
  "Adventure",
  "Off-Road",
  "Track/Racing",
] as const;

export const SAFETY_CERTIFICATIONS = [
  "DOT",
  "SNELL",
  "ECE",
  "FIM",
  "CE 1",
  "CE 2",
] as const;
