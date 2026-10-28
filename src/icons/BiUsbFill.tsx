import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiUsbFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='usb-fill'>
      <path d='M.5 5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm1.75 1.5h11.5a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25H2.25A.25.25 0 0 1 2 7.75v-1a.25.25 0 0 1 .25-.25' />
    </SvgIcon>
  );
}
