import { useState } from "react";
import questions from "./constants";

// component
import Question from "./components/Question";

const App = () => {
  const [data, setData] = useState(questions);

  return (
    <main className="bg-gradient-to-b from-softViolet to-softBlue flex justify-center items-center w-screen h-screen transition-all">
      {/* card */}
      <div className="card bg-white w-[25rem] lg:w-[55rem] p-4 lg:p-12 rounded-3xl flex flex-col lg:flex-row items-center mt-20 lg:mt-1 lg:overflow-hidden">
        {/* image */}
        <div className="img-container w-3/4 lg:w-2/4 -mt-36 lg:mt-[10px] lg:-ml-[5rem]">
          <img
            src="assets\illustration-woman-online-desktop.svg"
            alt="illustration"
            className="lg:w-[40rem] lg:-ml-8"
          />
          <img
            src="assets\bg-pattern-desktop.svg"
            alt="bg-pattern"
            className="-mt-60 md:-mt-64 lg:-mt-72 lg:-ml-9 lg:w-[65rem]"
          />
        </div>
        {/* heading */}
        <div className="p-4 lg:w-3/4">
          <div className="flex flex-col pb-2 items-center sm:items-center lg:items-start">
            <h1 className="text-3xl font-black font-kumbh text-destratedBlue ml-2">
              FAQ
            </h1>
          </div>
          {/* faq's */}
          <div className="flex flex-col gap-3 divide-y">
            {data.map((item) => {
              return <Question key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
