import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiSquareHalf(props: IconProps) {
  return (
    <SvgIcon {...props} name='square-half'>
      <path d='M8 15V1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm6 1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z' />
    </SvgIcon>
  );
}
