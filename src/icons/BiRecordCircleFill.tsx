import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiRecordCircleFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='record-circle-fill'>
      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6' />
    </SvgIcon>
  );
}
