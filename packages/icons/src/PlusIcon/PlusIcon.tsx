import type { ReactElement } from 'react';
import type { SvgIconProps } from '@mui/material';

import { withVariant } from '../IconVariantHoc';

function PlusIcon({
  fill,
  height,
  width,
  ...rest
}: SvgIconProps): ReactElement {
  const PlusIcon12px = (
    <svg
      viewBox="0 0 12 12"
      height={height}
      width={width}
      fill={fill}
      {...rest}
    >
      <path
        fill="color"
        fillRule="evenodd"
        d="M6.5 5.5V1h-1v4.5H1v1h4.5V11h1V6.5H11v-1H6.5Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const PlusIcon16px = (
    <svg
      viewBox="0 0 16 16"
      height={height}
      width={width}
      fill={fill}
      {...rest}
    >
      <path
        fill="color"
        fillRule="evenodd"
        d="M8.55 7.45V1.333h-1.1V7.45H1.333v1.1H7.45v6.117h1.1V8.55h6.117v-1.1H8.55Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const PlusIcon24px = (
    <svg
      viewBox="0 0 24 24"
      height={height}
      width={width}
      fill={fill}
      {...rest}
    >
      <path
        fill="color"
        fillRule="evenodd"
        d="M12.65 11.35V2h-1.3v9.35H2v1.3h9.35V22h1.3v-9.35H22v-1.3h-9.35Z"
        clipRule="evenodd"
      />
    </svg>
  );

  switch (height) {
    case 12:
      return PlusIcon12px;

    case 16:
      return PlusIcon16px;

    case 24:
      return PlusIcon24px;

    default:
      return PlusIcon16px;
  }
}

const PlusIconWithVariant = withVariant(PlusIcon);
PlusIconWithVariant.displayName = 'PlusIcon';

export default PlusIconWithVariant;
