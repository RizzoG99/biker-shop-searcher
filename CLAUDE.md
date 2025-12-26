# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Biker Shop Searcher** is a search engine platform designed to help users find products for their motorcycling lifestyle. The project is currently in the early planning/design phase with HTML mockups and design specifications.

## Current State

This repository contains design assets and prototypes only - no production application code has been written yet:

- **docs/mockup/outfit-builder/**: HTML prototype showing an "Outfit Builder" feature that curates complete motorcycle gear loadouts based on user preferences (riding style, budget, weather conditions). Displays three pricing tiers (Entry Spec, Rider's Choice, Pro Spec) with specific product recommendations for helmets, jackets, gloves, boots, and pants.

- **docs/mockup/designSystem/**: HTML prototype documenting the visual design system including color palette, typography, and UI components.

## Design System

The application uses a dark mode design system built with Tailwind CSS:

### Color Palette
- **Primary**: `#f26c0d` (Burnt Orange) - Used for primary actions, CTAs, and brand identity
- **Accent**: `#6d28d9` (Deep Purple) - Used for accents and tags
- **Background Dark**: `#181411` (Near Black) - Main dark background
- **Card Dark**: `#27201b` or `#392f28` (Dark Graphite) - Card backgrounds and borders
- **Text Secondary**: `#baa89c` or `#6B7280` (Steel Gray/Beige) - Secondary text

### Typography
- **Display Font**: Space Grotesk (outfit-builder) / Oswald (design system) - For headlines and bold statements
- **Body Font**: Noto Sans (outfit-builder) / Inter/Roboto (design system) - For body text and UI elements

### UI Patterns
- Rounded corners with Tailwind defaults (`rounded-lg`, `rounded-xl`, `rounded-full`)
- Card-based layouts with hover states and transitions
- Material Symbols Outlined icons
- Dark mode as primary theme

## Key Features (Planned)

Based on the mockups, the application will include:

1. **Outfit Builder**: Generates curated motorcycle gear loadouts based on:
   - Riding style (Sport Touring, etc.)
   - Budget constraints
   - Weather conditions (All-Weather, etc.)
   - Color preferences

2. **Product Cards**: Display individual gear items with:
   - Product images
   - Name and specifications
   - Pricing
   - Safety certifications (DOT, SNELL, CE ratings, FIM)

3. **Navigation Features**:
   - Gear Search
   - Outfit Builder
   - Deals section
   - My Garage (user's saved items)

## Development Notes

### When Implementing the Application

- The design system uses Tailwind CSS with custom configuration - maintain consistency with the color palette and typography defined in the mockups
- Prioritize dark mode as the primary interface
- Product cards should show safety certifications prominently (SNELL, DOT, CE ratings, FIM)
- The Outfit Builder should support filtering by riding style, budget, weather conditions, and color preferences
- Maintain the three-tier pricing structure (Entry Spec, Rider's Choice, Pro Spec) for outfit recommendations
