import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiDisplayportFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='displayport-fill'>
      <path d='M1 5a1 1 0 0 0-1 1v3.191a1 1 0 0 0 .553.894l1.618.81a1 1 0 0 0 .447.105H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm1.5 2h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8H3v.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5' />
    </SvgIcon>
  );
}
