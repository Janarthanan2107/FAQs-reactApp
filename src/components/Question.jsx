import { useState } from "react";

const Question = ({ item }) => {
  const { question, answer } = item;
  const [isShowAnswer, setIsShowAnswer] = useState(false);

  const showData = () => {
    setIsShowAnswer((prev) => !prev);
  };

  return (
    <article className="py-2 px-2 flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <h3 className={isShowAnswer ? "font-semibold" : ""}>{question}</h3>
        <span
          className="ml-4 cursor-pointer hover:-translate-y-1 transition duration-300 ease-in-out"
          onClick={showData}
        >
          {isShowAnswer ? (
            <i className="fa-solid fa-chevron-up text-softRed text-[12px] font-bold"></i>
          ) : (
            <i className="fa-solid fa-chevron-down text-softRed text-[12px] font-bold"></i>
          )}
        </span>
      </div>
      <div className={`overflow-hidden transition-max-h ease-in duration-700 ${isShowAnswer ? 'max-h-[100px]' : 'max-h-0'}`}><p>{answer}</p></div>
    </article>
  );
};

export default Question;
