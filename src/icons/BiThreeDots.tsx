import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiThreeDots(props: IconProps) {
  return (
    <SvgIcon {...props} name='three-dots'>
      <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3' />
    </SvgIcon>
  );
}
