import type { Components, Theme } from '@mui/material';

import { MuiButton } from './MuiButton.theme';

export const components: Components<Omit<Theme, 'components'>> = {
  MuiButton,
};
