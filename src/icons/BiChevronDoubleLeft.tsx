import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiChevronDoubleLeft(props: IconProps) {
  return (
    <SvgIcon {...props} name='chevron-double-left'>
      <path
        fillRule='evenodd'
        d='M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'
      />
      <path
        fillRule='evenodd'
        d='M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'
      />
    </SvgIcon>
  );
}
