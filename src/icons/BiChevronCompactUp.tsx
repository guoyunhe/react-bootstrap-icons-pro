import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiChevronCompactUp(props: IconProps) {
  return (
    <SvgIcon {...props} name='chevron-compact-up'>
      <path
        fillRule='evenodd'
        d='M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z'
      />
    </SvgIcon>
  );
}
