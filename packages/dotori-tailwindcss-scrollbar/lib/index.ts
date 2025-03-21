import plugin, { PluginAPI } from 'tailwindcss/plugin';

export const scrollbarPlugin: ReturnType<typeof plugin> = plugin(({ addUtilities, config }: Plugin) => {
  const prefix = config('prefix') as ((className: string) => string) | (string | undefined);

  const bounded = addUtilities.bind(this);

  const newUtilities = {
    [`.${typeof prefix === 'function' ? prefix('scrollbar-hidden') : `${prefix}scrollbar-hidden`}`]: {
      '&::-webkit-scrollbar': {
        width: '0px',
      },
    },
  };

  bounded(newUtilities, ['responsive', 'hover']);
});

type Plugin = { addUtilities: PluginAPI['addUtilities']; config: PluginAPI['config'] };
