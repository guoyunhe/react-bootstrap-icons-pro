import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiCircleFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='circle-fill'>
      <circle cx='8' cy='8' r='8' />
    </SvgIcon>
  );
}
