import { mainTheme } from '@component-lib/components/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Decorator } from '@storybook/react';

export const decorators: Decorator[] = [
  withThemeFromJSXProvider({
    themes: {
      light: mainTheme,
      dark: mainTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
