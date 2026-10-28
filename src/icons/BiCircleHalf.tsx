import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiCircleHalf(props: IconProps) {
  return (
    <SvgIcon {...props} name='circle-half'>
      <path d='M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16' />
    </SvgIcon>
  );
}
