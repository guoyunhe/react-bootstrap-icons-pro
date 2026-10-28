import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiSlashSquareFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='slash-square-fill'>
      <path d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm9.354 5.354-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708.708' />
    </SvgIcon>
  );
}
