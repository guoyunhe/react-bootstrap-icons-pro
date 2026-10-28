import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiCode(props: IconProps) {
  return (
    <SvgIcon {...props} name='code'>
      <path d='M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z' />
    </SvgIcon>
  );
}
