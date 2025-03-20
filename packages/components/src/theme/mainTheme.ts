import { createTheme } from '@mui/material/styles';

import { components } from './components';
import { spacing } from './constants';
import { palette } from './palette';
import { typography } from './typography';

export const mainTheme = createTheme({
  palette,
  spacing,
  components: { ...components },
  typography,
});
