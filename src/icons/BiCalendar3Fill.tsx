import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiCalendar3Fill(props: IconProps) {
  return (
    <SvgIcon {...props} name='calendar3-fill'>
      <path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm0 1v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3z' />
    </SvgIcon>
  );
}
