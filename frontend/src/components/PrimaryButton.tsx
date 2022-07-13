import React from 'react';

export const PrimaryButton = (props: { children: React.ReactNode }) => {
  return <button className="primaryBtn">{props.children}</button>;
};
