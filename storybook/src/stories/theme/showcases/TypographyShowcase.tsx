import type { ReactElement } from 'react';
import { palette, typography } from '@component-lib/components/theme';
import { createTheme, ThemeProvider, Typography } from '@mui/material';

const theme = createTheme({
  typography,
  palette,
});

export default function TypographyShowcase(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h1">H1 Heading</Typography>
        <Typography variant="h2">H2 Heading</Typography>
        <Typography variant="h3">H3 Heading</Typography>
        <Typography variant="h4">H4 Heading</Typography>
        <Typography variant="h5">H5 Heading</Typography>
        <Typography variant="h6">H6 Heading</Typography>
        <Typography variant="body1">Body 1 text</Typography>
        <Typography variant="body2">Body 2 text</Typography>
        <Typography variant="body3">Body 3 text</Typography>
      </div>
    </ThemeProvider>
  );
}
