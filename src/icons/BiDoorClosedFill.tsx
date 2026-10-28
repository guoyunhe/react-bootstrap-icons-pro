import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiDoorClosedFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='door-closed-fill'>
      <path d='M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
    </SvgIcon>
  );
}
