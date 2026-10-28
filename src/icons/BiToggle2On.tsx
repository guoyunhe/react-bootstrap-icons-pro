import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiToggle2On(props: IconProps) {
  return (
    <SvgIcon {...props} name='toggle2-on'>
      <path d='M7 5H3a3 3 0 0 0 0 6h4a5 5 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416q.235-.537.584-1' />
      <path d='M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0' />
    </SvgIcon>
  );
}
