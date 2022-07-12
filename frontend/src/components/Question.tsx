import { FC } from 'react';
import { QuestionData } from '../interfaces/QuestionsData';

interface Props {
  data: QuestionData;
}

export const Question: React.FC<Props> = ({ data }) => {
  return (
    <div className="py-3 px-0">
      <div className="py-4 px-0 text-[19px]">{data.title}</div>
      <div className="text-[12px] italic text-[#857c81]">
        {`Asked by ${
          data.userName
        } on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
      </div>
    </div>
  );
};
