import React, { MouseEventHandler } from "react";

interface AnswerProps {
  question: string;
  rightAnswer: boolean;
}

const Answer: React.FC<AnswerProps> = ({ question, rightAnswer }) => {
  return (
    <div className="answer">
      <span className="icon flex-1">{rightAnswer ? `+` : `-`}</span>
      <span className="flex-9" dangerouslySetInnerHTML={{ __html: question }} />
    </div>
  );
};

interface ResultsProps {
  results: any;
  onPlayAgain: MouseEventHandler<HTMLButtonElement>;
}

const Results: React.FC<ResultsProps> = ({ results, onPlayAgain }) => {
  const rightAnswer = results.filter(
    (result: any) => result.rightAnswer
  ).length;
  return (
    <div className={"center"}>
      <div className={"title"}>
        {`You scored ${rightAnswer}/${results.length}`}
      </div>
      <div className={"desc"}>
        {results.map((result: any, index: number) => (
          <Answer
            key={index}
            question={result.question}
            rightAnswer={result.rightAnswer}
          />
        ))}
      </div>
      <div>
        <button className={"btn-start"} onClick={onPlayAgain}>PLAY AGAIN</button>
      </div>
    </div>
  );
};

export default Results;
