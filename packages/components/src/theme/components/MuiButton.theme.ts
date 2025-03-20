import type { Components, Theme } from '@mui/material';

export const MuiButton: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      // Custom style overrides
      variants: [
        {
          props: { variant: 'outlined' },
          style: {}, // Custom variant style overrides
        },
        {
          props: { variant: 'contained' },
          style: {}, // Custom variant style overrides
        },
      ],
    },
  },
};
