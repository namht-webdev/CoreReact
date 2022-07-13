import { FC } from 'react';
import { QuestionData } from '../interfaces/QuestionsData';
import { Question } from './Question';

interface Props {
  data: QuestionData[];
  renderItem?: (item: QuestionData) => JSX.Element;
}

export const QuestionList: FC<Props> = ({ data, renderItem }) => (
  <ul className="mt-3 mx-0 mb-0 py-0 px-5 list-none bg-white rounded-b-[4px] border-t-[3px] border-solid border-[#efd197] shadow-[0_3px_5px_0_rgba(0,0,0,0.16)]">
    {data.map((question) => (
      <li className="first-of-type:border-none border-t-[1px] boder-solid border-[#e3e2e2] w-full">
        {renderItem ? renderItem(question) : <Question data={question} />}
      </li>
    ))}
  </ul>
);
