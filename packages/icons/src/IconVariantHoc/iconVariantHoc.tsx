import type { ComponentType, FC } from 'react';
import type { SvgIconProps } from '@mui/material';

import type { IconVariantHocProps } from './types';

export function withVariant(
  // eslint-disable-next-line @typescript-eslint/naming-convention
  WrappedComponent: ComponentType<SvgIconProps>,
): FC<IconVariantHocProps> {
  return function IconSizeAndColorWrapper(props: IconVariantHocProps) {
    const { variant, className } = props;

    let size = 16; // Default size

    switch (variant) {
      case 'small':
        size = 12;
        break;
      case 'medium':
        size = 16;
        break;
      case 'large':
        size = 24;
        break;
    }

    return (
      <WrappedComponent
        fill={props?.color || '#000'}
        width={size}
        height={size}
        className={className}
      />
    );
  };
}
