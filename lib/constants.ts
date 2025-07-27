import {
  EnvironmentPreset,
  ColorPreset,
  MaterialPreset,
  BevelPreset,
  ResolutionPreset,
} from "./types";

// Environment presets
export const ENVIRONMENT_PRESETS: EnvironmentPreset[] = [
  { name: "apartment", label: "Apartment (Indoor)", color: "#e0ccae" },
  { name: "city", label: "City (Urban)", color: "#b4bdc6" },
  { name: "dawn", label: "Dawn (Sunrise)", color: "#ffd0b0" },
  { name: "forest", label: "Forest (Natural)", color: "#a8c0a0" },
  { name: "lobby", label: "Lobby (Interior)", color: "#d8c8b8" },
  { name: "park", label: "Park (Daytime)", color: "#b3d9ff" },
  { name: "studio", label: "Studio (Neutral)", color: "#d9d9d9" },
  { name: "sunset", label: "Sunset (Warm)", color: "#ffb98c" },
  { name: "warehouse", label: "Warehouse (Industrial)", color: "#9ba3ad" },
];

// Theme-aware background color presets
export const DARK_MODE_COLOR = "#121212";
export const LIGHT_MODE_COLOR = "#f5f5f5";

// Solid color presets
export const SOLID_COLOR_PRESETS: ColorPreset[] = [
  { name: "light", label: "Light", color: "#f5f5f5" },
  { name: "dark", label: "Dark", color: "#121212" },
  { name: "blue", label: "Blue", color: "#e6f7ff" },
  { name: "gray", label: "Gray", color: "#e0e0e0" },
  { name: "green", label: "Green", color: "#e6ffed" },
];

// Material presets
export const MATERIAL_PRESETS: MaterialPreset[] = [
  {
    name: "metallic",
    label: "Metallic",
    roughness: 0.2,
    metalness: 0.9,
    clearcoat: 1.0,
    transmission: 0,
    envMapIntensity: 1.8,
  },
  {
    name: "clay",
    label: "Clay/Matte",
    roughness: 1.0,
    metalness: 0.0,
    clearcoat: 0.0,
    transmission: 0,
    envMapIntensity: 0.3,
  },
  {
    name: "plastic",
    label: "Plastic",
    roughness: 0.4,
    metalness: 0.0,
    clearcoat: 0.6,
    transmission: 0,
    envMapIntensity: 0.8,
  },
  {
    name: "glass",
    label: "Glass",
    roughness: 0.05,
    metalness: 0.0,
    clearcoat: 1.0,
    transmission: 0.95,
    envMapIntensity: 3.5,
  },
  {
    name: "custom",
    label: "Custom",
    roughness: 0.3,
    metalness: 0.5,
    clearcoat: 0,
    transmission: 0,
    envMapIntensity: 1.0,
  },
];

// PNG export resolutions
export const PNG_RESOLUTIONS: ResolutionPreset[] = [
  { label: "Low Quality", multiplier: 1 },
  { label: "Medium Quality", multiplier: 2 },
  { label: "High Quality", multiplier: 3 },
];

// Bevel presets
export const BEVEL_PRESETS: BevelPreset[] = [
  { name: "none", label: "None", thickness: 0, size: 0, segments: 1 },
  { name: "light", label: "Light", thickness: 0.5, size: 0.3, segments: 2 },
  { name: "medium", label: "Medium", thickness: 1.0, size: 0.5, segments: 4 },
  { name: "heavy", label: "Heavy", thickness: 2.0, size: 1.0, segments: 8 },
  { name: "custom", label: "Custom", thickness: 1.0, size: 0.5, segments: 4 },
];
