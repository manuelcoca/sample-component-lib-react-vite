import type { ReactElement } from 'react';
import { spacing } from '@component-lib/components/theme';

export default function SpacingShowcase(): ReactElement {
  const spacings = Object.entries(spacing);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
      }}
    >
      {spacings.map(([label, value]) => (
        <div
          key={label}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginBottom: spacing.xl,
          }}
        >
          <div
            style={{
              height: value,
              width: value,
              backgroundColor: 'blue',
              marginBottom: 8,
            }}
          />
          <div
            style={{
              fontSize: 12,
            }}
          >
            {value} ({label})
          </div>
        </div>
      ))}
    </div>
  );
}
