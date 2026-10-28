import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiBrilliance(props: IconProps) {
  return (
    <SvgIcon {...props} name='brilliance'>
      <path d='M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7' />
    </SvgIcon>
  );
}
