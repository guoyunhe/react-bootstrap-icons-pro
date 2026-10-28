import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiRecordFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='record-fill'>
      <path fillRule='evenodd' d='M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10' />
    </SvgIcon>
  );
}
