export function darkenColor (hex: string, factor = 0.2) {
  // Remove the '#' if it's included
  hex = hex.replace('#', '');

  // Convert hex to RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Apply the darkening factor (reduce each color component)
  r = Math.max(0, r - (r * factor));
  g = Math.max(0, g - (g * factor));
  b = Math.max(0, b - (b * factor));

  // Convert RGB back to hex
  const darkenedHex = `#${(1 << 24 | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;

  return darkenedHex;
}