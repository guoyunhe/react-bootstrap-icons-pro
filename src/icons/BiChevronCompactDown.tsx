import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiChevronCompactDown(props: IconProps) {
  return (
    <SvgIcon {...props} name='chevron-compact-down'>
      <path
        fillRule='evenodd'
        d='M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67'
      />
    </SvgIcon>
  );
}
