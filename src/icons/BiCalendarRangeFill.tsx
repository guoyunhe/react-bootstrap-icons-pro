import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiCalendarRangeFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='calendar-range-fill'>
      <path d='M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2z' />
    </SvgIcon>
  );
}
