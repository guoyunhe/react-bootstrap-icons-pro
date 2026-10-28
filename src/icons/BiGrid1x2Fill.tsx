import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiGrid1x2Fill(props: IconProps) {
  return (
    <SvgIcon {...props} name='grid-1x2-fill'>
      <path d='M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z' />
    </SvgIcon>
  );
}
