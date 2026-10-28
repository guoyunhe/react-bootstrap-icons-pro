import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiTextCenter(props: IconProps) {
  return (
    <SvgIcon {...props} name='text-center'>
      <path
        fillRule='evenodd'
        d='M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5'
      />
    </SvgIcon>
  );
}
