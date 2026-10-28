import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiAlignBottom(props: IconProps) {
  return (
    <SvgIcon {...props} name='align-bottom'>
      <rect width='4' height='12' x='6' y='1' rx='1' />
      <path d='M1.5 14a.5.5 0 0 0 0 1zm13 1a.5.5 0 0 0 0-1zm-13 0h13v-1h-13z' />
    </SvgIcon>
  );
}
