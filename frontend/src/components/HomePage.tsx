import { useState, useEffect } from 'react';
import { PrimaryButton } from './PrimaryButton';
import { QuestionList } from './QuestionList';
import {
  getUnansweredQuestions,
  QuestionData,
} from '../interfaces/QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);
  const [questionsLoading, setQuestionsLoading] = useState(true);
  useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unanswerQuestions = await getUnansweredQuestions();
      setQuestions(unanswerQuestions);
      setQuestionsLoading(false);
    };
    doGetUnansweredQuestions();
  }, []);
  return (
    <Page>
      <div className="flex items-center justify-between">
        <PageTitle>Unanswered Questions</PageTitle>
        <PrimaryButton>Ask a question</PrimaryButton>
      </div>
      {questionsLoading ? (
        <div className="text-[16px] italic">Loading ...</div>
      ) : (
        <QuestionList data={questions || []} />
      )}
    </Page>
  );
};
