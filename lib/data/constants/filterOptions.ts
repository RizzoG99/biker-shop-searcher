/**
 * Filter option constants for Outfit Builder
 * Defines all available options for riding style, colors, usage contexts, and budget configuration
 */

import type { RidingStyle, UsageContext, WeatherCondition } from '@/lib/types/outfit'

/**
 * Riding style options with icons
 * Icons use Material Symbols Outlined
 */
export const RIDING_STYLE_OPTIONS = [
  { value: 'Adventure' as RidingStyle, label: 'Adventure', icon: 'explore' },
  { value: 'Sport Touring' as RidingStyle, label: 'Sport', icon: 'sports_motorsports' },
  { value: 'Street' as RidingStyle, label: 'Touring', icon: 'map' },
  { value: 'Track' as RidingStyle, label: 'Café Racer', icon: 'two_wheeler' },
  { value: 'Cruiser' as RidingStyle, label: 'Urban', icon: 'location_city' },
] as const

/**
 * Color options for gear filtering
 */
export const COLOR_OPTIONS = [
  { value: 'Black', label: 'Black', hex: '#111' },
  { value: 'White', label: 'White', hex: '#fff' },
  { value: 'Red', label: 'Red', hex: '#dc2626' },
  { value: 'Blue', label: 'Blue', hex: '#2563eb' },
  { value: 'Lime', label: 'Lime', hex: '#a3e635' },
] as const

/**
 * Usage context options with icons
 * Represents different riding scenarios
 */
export const USAGE_CONTEXT_OPTIONS = [
  { value: 'City Commute' as UsageContext, label: 'City Commute', icon: 'commute' },
  { value: 'Long Trip' as UsageContext, label: 'Long Trip', icon: 'luggage' },
  { value: 'Off-road' as UsageContext, label: 'Off-road', icon: 'terrain' },
  { value: 'Track Day' as UsageContext, label: 'Track Day', icon: 'flag' },
] as const

/**
 * Weather condition options with icons
 */
export const WEATHER_OPTIONS = [
  { value: 'All-Weather' as WeatherCondition, label: 'All-Weather', icon: 'cloud' },
  { value: 'Summer' as WeatherCondition, label: 'Summer', icon: 'wb_sunny' },
  { value: 'Winter' as WeatherCondition, label: 'Winter', icon: 'ac_unit' },
  { value: 'Rain' as WeatherCondition, label: 'Rain', icon: 'water_drop' },
] as const

/**
 * Budget slider configuration
 */
export const BUDGET_CONFIG = {
  min: 0,
  max: 3000,
  step: 100,
  defaultMin: 500,
  defaultMax: 1500,
} as const
