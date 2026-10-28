import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiChevronUp(props: IconProps) {
  return (
    <SvgIcon {...props} name='chevron-up'>
      <path
        fillRule='evenodd'
        d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'
      />
    </SvgIcon>
  );
}
