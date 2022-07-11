import React from 'react';
import { PrimaryButton } from './PrimaryButton';

export const HomePage = () => (
  <div className="mt-14 ml-auto mr-auto mb-5 max-w-[600px]  py-8 px5">
    <div className="flex items-center justify-between">
      <h2 className="text-[15px] font-bold mt-3 ml-0 mb-5 text-center uppercase">
        Unanswered Questions
      </h2>
      <PrimaryButton>Ask a question</PrimaryButton>
    </div>
  </div>
);
