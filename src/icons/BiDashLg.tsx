import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiDashLg(props: IconProps) {
  return (
    <SvgIcon {...props} name='dash-lg'>
      <path fillRule='evenodd' d='M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8' />
    </SvgIcon>
  );
}
