import { PrimaryButton } from './PrimaryButton';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions } from '../interfaces/QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage = () => (
  <Page>
    <div className="flex items-center justify-between">
      <PageTitle>Unanswered Questions</PageTitle>
      <PrimaryButton>Ask a question</PrimaryButton>
    </div>
    <QuestionList data={getUnansweredQuestions()} />
  </Page>
);
