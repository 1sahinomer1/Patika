import { useEffect, useState } from "react";
import { H3 } from "./Styles/h3";

const ResultScreen = () => {
  const [local, setLocal] = useState(JSON.parse(localStorage.getItem("data")));

  useEffect(() => {}, [local]);
  return (
    <div>
      <H3>Last Results</H3>
      {local.results.map((result) => {
        return <p>{result.bmi}</p>;
      })}
    </div>
  );
};

export default ResultScreen;
