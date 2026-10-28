import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiDot(props: IconProps) {
  return (
    <SvgIcon {...props} name='dot'>
      <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' />
    </SvgIcon>
  );
}
