import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiWindows(props: IconProps) {
  return (
    <SvgIcon {...props} name='windows'>
      <path d='M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4.026 6.378L16 16V8.395zM16 0 7.33 1.244v6.414H16z' />
    </SvgIcon>
  );
}
