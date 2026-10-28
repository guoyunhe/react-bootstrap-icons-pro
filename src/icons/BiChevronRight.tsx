import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiChevronRight(props: IconProps) {
  return (
    <SvgIcon {...props} name='chevron-right'>
      <path
        fillRule='evenodd'
        d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'
      />
    </SvgIcon>
  );
}
