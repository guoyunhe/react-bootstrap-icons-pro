import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiSquareFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='square-fill'>
      <path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    </SvgIcon>
  );
}
