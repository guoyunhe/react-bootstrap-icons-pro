import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiArrowUpLeft(props: IconProps) {
  return (
    <SvgIcon {...props} name='arrow-up-left'>
      <path
        fillRule='evenodd'
        d='M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0z'
      />
    </SvgIcon>
  );
}
