import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiAlignTop(props: IconProps) {
  return (
    <SvgIcon {...props} name='align-top'>
      <rect width='4' height='12' rx='1' transform='matrix(1 0 0 -1 6 15)' />
      <path d='M1.5 2a.5.5 0 0 1 0-1zm13-1a.5.5 0 0 1 0 1zm-13 0h13v1h-13z' />
    </SvgIcon>
  );
}
