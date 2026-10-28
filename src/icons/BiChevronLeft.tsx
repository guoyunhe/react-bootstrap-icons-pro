import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiChevronLeft(props: IconProps) {
  return (
    <SvgIcon {...props} name='chevron-left'>
      <path
        fillRule='evenodd'
        d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'
      />
    </SvgIcon>
  );
}
