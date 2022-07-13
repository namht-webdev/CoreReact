import { QuestionData } from '../interfaces/QuestionsData';

interface Props {
  data: QuestionData;
  showContent?: boolean;
}

export const Question: React.FC<Props> = ({ data, showContent = true }) => {
  return (
    <div className="py-3 px-0">
      <div className="py-4 px-0 text-[19px]">{data.title}</div>
      {showContent && (
        <div className="pb-2 text-[15px] text-[#5c5a5a]">
          {data.content.length > 50
            ? `${data.content.substring(0, 50)} ...`
            : data.content}
        </div>
      )}
      <div className="text-[12px] italic text-[#857c81]">
        {`Asked by ${
          data.userName
        } on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
      </div>
    </div>
  );
};

// Question.defaultProps = {
//   showContent: true,
// };
