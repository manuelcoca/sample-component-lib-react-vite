import { ReactElement } from 'react';
import { ButtonProps, Button as MuiButton } from '@mui/material';
import { tss } from 'tss-react';

export const useButtonStyles = tss.create(() => ({
  button: {
    padding: 0,
    width: '30px',
    height: '30px',
  },
}));

export function Button(props: ButtonProps): ReactElement {
  const { classes } = useButtonStyles();

  return <MuiButton className={classes.button} {...props} />;
}
