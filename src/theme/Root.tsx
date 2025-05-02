import React from 'react';
import type {ReactNode} from 'react';

export default function Root({children}: {children: ReactNode}): React.ReactElement {
  return <>{children}</>;
}