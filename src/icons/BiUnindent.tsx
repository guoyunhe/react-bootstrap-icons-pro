import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiUnindent(props: IconProps) {
  return (
    <SvgIcon {...props} name='unindent'>
      <path
        fillRule='evenodd'
        d='M13 8a.5.5 0 0 0-.5-.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H12.5A.5.5 0 0 0 13 8'
      />
      <path fillRule='evenodd' d='M3.5 4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5' />
    </SvgIcon>
  );
}
