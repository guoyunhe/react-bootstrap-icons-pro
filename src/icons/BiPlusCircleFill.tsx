import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiPlusCircleFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='plus-circle-fill'>
      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z' />
    </SvgIcon>
  );
}
