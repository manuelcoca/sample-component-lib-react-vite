/* eslint-disable @typescript-eslint/consistent-type-definitions */
import '@mui/material/Button';
import '@mui/material/styles';
import type { TypographyStyleOptions } from '@mui/material/styles/createTypography';

import type { SpacingOptions } from './types';

declare module '@mui/material/styles' {
  interface Palette {
    white: string;
    black: string;
  }

  interface PaletteOptions {
    white?: string;
    black?: string;
  }

  interface TypographyVariants {
    body3: TypographyStyleOptions;
  }

  interface TypographyVariantsOptions {
    body3?: TypographyStyleOptions;
  }

  interface Theme {
    spacing: SpacingOptions;
  }

  interface ThemeOptions {
    spacing?: SpacingOptions;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}
