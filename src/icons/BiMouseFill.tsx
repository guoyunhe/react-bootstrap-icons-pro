import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiMouseFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='mouse-fill'>
      <path d='M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0z' />
    </SvgIcon>
  );
}
