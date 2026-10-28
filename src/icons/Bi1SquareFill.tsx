import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function Bi1SquareFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='1-square-fill'>
      <path d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z' />
    </SvgIcon>
  );
}
