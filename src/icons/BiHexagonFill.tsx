import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiHexagonFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='hexagon-fill'>
      <path
        fillRule='evenodd'
        d='M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z'
      />
    </SvgIcon>
  );
}
