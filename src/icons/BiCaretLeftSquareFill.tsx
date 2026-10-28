import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiCaretLeftSquareFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='caret-left-square-fill'>
      <path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12' />
    </SvgIcon>
  );
}
