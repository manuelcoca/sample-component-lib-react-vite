import type { ReactElement } from 'react';
import { palette } from '@component-lib/components/theme';
import type { PaletteOptions } from '@mui/material';

export default function PaletteShowcase(): ReactElement {
  const renderColorBoxes = (
    paletteObject: PaletteOptions,
    prefix = '',
  ): React.ReactElement[] => {
    const elements: React.ReactElement[] = [];

    const neutralElements: React.ReactElement[] = [];

    Object.entries(paletteObject).forEach(([key, value]) => {
      if (key === 'primary' || key === 'grey') {
        elements.push(
          <div
            key={prefix + key}
            style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}
          >
            {Object.entries(value).map(([subKey, subValue]) => (
              <div
                key={prefix + key + subKey}
                style={{ textAlign: 'center', margin: '10px' }}
              >
                <div
                  style={{
                    backgroundColor: subValue as string,
                    width: '100px',
                    height: '100px',
                    border: '1px solid #ccc',
                    margin: 'auto',
                  }}
                />
                <div style={{ marginTop: '5px', fontSize: '14px' }}>
                  {prefix + key + '.' + subKey}
                </div>
              </div>
            ))}
          </div>,
        );
      } else if (key.startsWith('neutral')) {
        neutralElements.push(
          <div
            key={prefix + key}
            style={{ textAlign: 'center', margin: '10px' }}
          >
            <div
              style={{
                backgroundColor: value as string,
                width: '100px',
                height: '100px',
                border: '1px solid #ccc',
                margin: 'auto',
              }}
            />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>
              {prefix + key}
            </div>
          </div>,
        );
      } else if (typeof value === 'object' && value !== null) {
        elements.push(
          ...renderColorBoxes(value as PaletteOptions, `${prefix}${key}.`),
        );
      } else {
        elements.push(
          <div
            key={prefix + key}
            style={{ textAlign: 'center', margin: '10px' }}
          >
            <div
              style={{
                backgroundColor: value as string,
                width: '100px',
                height: '100px',
                border: '1px solid #ccc',
                margin: 'auto',
              }}
            />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>
              {prefix + key}
            </div>
          </div>,
        );
      }
    });

    if (neutralElements.length > 0) {
      elements.push(
        <div
          key="neutral-row"
          style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}
        >
          {neutralElements}
        </div>,
      );
    }

    return elements;
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {renderColorBoxes(palette)}
    </div>
  );
}
