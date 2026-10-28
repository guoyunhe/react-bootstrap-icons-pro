import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiParagraph(props: IconProps) {
  return (
    <SvgIcon {...props} name='paragraph'>
      <path d='M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5' />
    </SvgIcon>
  );
}
