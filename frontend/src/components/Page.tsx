import React, { FC } from 'react';
import { PageTitle } from './PageTitle';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const Page: FC<Props> = ({ title, children }) => {
  return (
    <div className="mt-12 mx-auto mb-5 py-8 px-5 max-w-[600px]">
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </div>
  );
};
