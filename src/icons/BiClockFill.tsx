import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiClockFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='clock-fill'>
      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z' />
    </SvgIcon>
  );
}
