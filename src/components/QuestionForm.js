import { useState } from "react";
function QuestionForm() {
  const [inputValue, setInputValue] = useState("Type your question here");

  return (
    <div>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <span>{inputValue}</span>
    </div>
  );
}

export default QuestionForm;
