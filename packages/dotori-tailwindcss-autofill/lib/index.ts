import plugin, { PluginAPI } from 'tailwindcss/plugin';

export const webkitBoxShadowPlugin: ReturnType<typeof plugin> = plugin(
  ({ addUtilities, theme }: { addUtilities: PluginAPI['addUtilities']; theme: PluginAPI['theme'] }) => {
    const colors = flattenColors(theme('colors') as FlattenedColors);
    const newUtilities = Object.entries(colors ?? {}).reduce(
      (acc, [key, value]) => {
        if (typeof value === 'object') {
          Object.entries(value).forEach(([shade, color]) => {
            acc[`.webkit-shadow-${key}-${shade}`] = {
              '-webkit-box-shadow': `0 0 0 1000px ${color} inset`,
            };
          });
        } else {
          acc[`.webkit-shadow-${key}`] = {
            '-webkit-box-shadow': `0 0 0 1000px ${value} inset`,
          };
        }
        return acc;
      },
      {} as Record<string, Record<string, string>>,
    );

    addUtilities(newUtilities);
  },
);

type ColorKey = string;
type ColorValue = string | object;
type FlattenedColors = Record<ColorKey, ColorValue>;

function flattenColors(colors: FlattenedColors, prefix = ''): FlattenedColors {
  const result: FlattenedColors = {};

  for (const [key, value] of Object.entries(colors)) {
    const newKey = prefix ? `${prefix}-${key}` : key;

    if (typeof value === 'string') {
      result[newKey] = value;
    } else if (typeof value === 'object' && value !== null) {
      const nested = flattenColors(value as FlattenedColors, newKey);
      Object.assign(result, nested);
    }
  }

  return result;
}
