import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiCaretLeft(props: IconProps) {
  return (
    <SvgIcon {...props} name='caret-left'>
      <path d='M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753' />
    </SvgIcon>
  );
}
