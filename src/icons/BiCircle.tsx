import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiCircle(props: IconProps) {
  return (
    <SvgIcon {...props} name='circle'>
      <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16' />
    </SvgIcon>
  );
}
