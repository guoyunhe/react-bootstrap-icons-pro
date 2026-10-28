import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiUsbCFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='usb-c-fill'>
      <path d='M3 5a3 3 0 0 0 0 6h10a3 3 0 1 0 0-6zm.5 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1' />
    </SvgIcon>
  );
}
