import React from "react";
import ScoreGauge from "./ScoreGauge";
import ScoreBadge from "./ScoreBadge";

const Category = ({ title, score }: { title: string; score: number }) => {
  const textColor =
    score >= 75
      ? "text-green-600"
      : score > 49
        ? "text-yellow-600"
        : "text-red-600";
  return (
    <div className="resume-summary">
      <div className="category">
        <div className="flex flex-row items-center justify-center">
          <p className="text-2xl">{title}</p>
          <ScoreBadge score={score} />
        </div>
        <p className="text-2xl">
          <span className={textColor}></span>
        </p>
      </div>
    </div>
  );
};

const Summary = ({ feedback }: { feedback: Feedback }) => {
  console.log(feedback);
  return (
    <div className="bg-white rounded-2xl shadow-md w-full">
      <div className="flex flex-row items-center p-4 gap-8">
        <ScoreGauge score={feedback.overallRating} />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-gray-500">Your Resume Score</h2>
          <p className="text-sm text-gray-500">
            This score is calculated based on the variables listed below.
          </p>
        </div>
      </div>
      <Category
        title="Formatting & Design "
        score={feedback.formattingAndDesign}
      />
      <Category title="Content " score={feedback.contentQuality} />
      <Category title="Structure " score={feedback.relevanceToJobTarget} />
      <Category title="Skills" score={feedback.atsCompatibility} />
    </div>
  );
};

export default Summary;
