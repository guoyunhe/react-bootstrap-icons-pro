import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { BiHouse } from './icons';
import SvgIcon from './SvgIcon';

describe('SvgIcon', () => {
  it('renders an svg with the bootstrap icon class', () => {
    const html = renderToStaticMarkup(<SvgIcon name='house' />);
    expect(html).toContain('class="bi bi-house"');
    expect(html).toContain('viewBox="0 0 16 16"');
  });

  it('applies size, color and custom class names', () => {
    const html = renderToStaticMarkup(
      <SvgIcon name='house' size={24} color='red' className='custom' />,
    );
    expect(html).toContain('class="bi bi-house custom"');
    expect(html).toContain('width="24"');
    expect(html).toContain('fill="red"');
  });

  it('renders icon components', () => {
    const html = renderToStaticMarkup(<BiHouse />);
    expect(html).toContain('class="bi bi-house"');
  });
});
