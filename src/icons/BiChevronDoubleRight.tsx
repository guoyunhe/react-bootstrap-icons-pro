import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiChevronDoubleRight(props: IconProps) {
  return (
    <SvgIcon {...props} name='chevron-double-right'>
      <path
        fillRule='evenodd'
        d='M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708'
      />
      <path
        fillRule='evenodd'
        d='M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708'
      />
    </SvgIcon>
  );
}
