import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiPersonFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='person-fill'>
      <path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6' />
    </SvgIcon>
  );
}
