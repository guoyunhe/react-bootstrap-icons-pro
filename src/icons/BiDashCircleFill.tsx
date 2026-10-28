import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiDashCircleFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='dash-circle-fill'>
      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z' />
    </SvgIcon>
  );
}
