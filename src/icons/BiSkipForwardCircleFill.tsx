import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiSkipForwardCircleFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='skip-forward-circle-fill'>
      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.79 5.093A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L7.5 8.972V10.5a.5.5 0 0 0 .79.407L11 8.972V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528L8.29 5.093a.5.5 0 0 0-.79.407v1.528z' />
    </SvgIcon>
  );
}
