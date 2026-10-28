import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiToggleOn(props: IconProps) {
  return (
    <SvgIcon {...props} name='toggle-on'>
      <path d='M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8' />
    </SvgIcon>
  );
}
