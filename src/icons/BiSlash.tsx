import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiSlash(props: IconProps) {
  return (
    <SvgIcon {...props} name='slash'>
      <path d='M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0' />
    </SvgIcon>
  );
}
