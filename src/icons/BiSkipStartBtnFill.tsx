import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiSkipStartBtnFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='skip-start-btn-fill'>
      <path d='M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m9.71-6.907L7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.79-.407' />
    </SvgIcon>
  );
}
