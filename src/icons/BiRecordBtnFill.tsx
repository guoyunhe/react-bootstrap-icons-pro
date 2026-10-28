import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiRecordBtnFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='record-btn-fill'>
      <path d='M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m8-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6' />
    </SvgIcon>
  );
}
