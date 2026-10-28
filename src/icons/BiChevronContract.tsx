import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiChevronContract(props: IconProps) {
  return (
    <SvgIcon {...props} name='chevron-contract'>
      <path
        fillRule='evenodd'
        d='M3.646 13.854a.5.5 0 0 0 .708 0L8 10.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708m0-11.708a.5.5 0 0 1 .708 0L8 5.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708'
      />
    </SvgIcon>
  );
}
