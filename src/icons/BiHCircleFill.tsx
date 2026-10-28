import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiHCircleFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='h-circle-fill'>
      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5-3.998H9.67v3.322H6.33V4.002H5V12h1.33V8.455h3.34V12H11z' />
    </SvgIcon>
  );
}
