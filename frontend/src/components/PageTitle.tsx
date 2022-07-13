import React from 'react';

export const PageTitle = (props: { children?: React.ReactNode }) => {
  return (
    <div className="text-[15px] font-bold mt-3 mx-0 mb-1 text-center uppercase">
      {props.children}
    </div>
  );
};
