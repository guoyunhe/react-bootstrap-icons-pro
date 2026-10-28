import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiMagnetFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='magnet-fill'>
      <path d='M15 12h-4v3h4zM5 12H1v3h4zM0 8a8 8 0 1 1 16 0v8h-6V8a2 2 0 1 0-4 0v8H0z' />
    </SvgIcon>
  );
}
