import { createContext, useState, FC, useEffect } from "react";
import { BmiContextState, resultState } from "./Types";

const contextDefaultValues: BmiContextState = {
  weight: 0,
  height: 0,
  open: false,
  alert: false,
  resultsTotal: { results: [{ bmi: 0, bmiResult: "normal" }] },
  handleWeight() {},
  handleHeight() {},
  openModal() {},
  openAlert() {},
  calculate: (weight, height) => 0,
  bmi: (bmi) => "",
};

export const BMIcontext = createContext<BmiContextState>(contextDefaultValues);
// let userResults: { bmi: number; result: string }[] = [
//   { bmi: 0, result: "Normal" },
// ];
const BMIContextProvider: FC = ({ children }) => {
  const [weight, setWeight] = useState<number>(contextDefaultValues.weight);
  const [height, setHeight] = useState<number>(contextDefaultValues.height);
  const [result, setResult] = useState<resultState>(
    contextDefaultValues.resultsTotal
  );
  const [open, isOpen] = useState<boolean | undefined>(
    contextDefaultValues.open
  );
  const [alert, alertOpen] = useState<boolean | undefined>(
    contextDefaultValues.alert
  );

  function openModal(event: any) {
    event.preventDefault();
    if (weight == 0 || height == 0) {
      alertOpen(true);
      return;
    } else {
      calculate(weight, height);
      isOpen(!open);
    }
    // result.push({
    //   bmi: calculate(weight, height),
    //   result: bmi(calculate(weight, height)),
    // });
    // console.log(result);
  }
  function openAlert(event: any) {
    event.preventDefault();
    alertOpen(false);
  }
  function handleHeight(event: any) {
    let value = event.target.value;
    setHeight(value);
  }
  function handleWeight(event: any) {
    let value = event.target.value;
    setWeight(value);
  }
  function calculate(weight: number, height: number): number {
    let score = weight / ((height / 100) * (height / 100));

    setResult({
      results: [...result.results, { bmi: score, bmiResult: bmi(score) }],
    });

    localStorage.setItem("data", JSON.stringify(result));

    console.log(result.results);
    return score;
  }
  function bmi(bmi: number) {
    if (bmi < 18.5) {
      return "underweight";
    } else if (bmi > 18.5 && bmi <= 24.9) {
      return "normal";
    } else if (bmi > 25 && bmi < 29.9) {
      return "overweight";
    } else {
      return "obesity";
    }
  }

  return (
    <BMIcontext.Provider
      value={{
        open,
        alert,
        weight,
        height,
        resultsTotal: result,
        handleWeight,
        handleHeight,
        openModal,
        openAlert,
        calculate,
        bmi,
      }}
    >
      {children}
    </BMIcontext.Provider>
  );
};

export default BMIContextProvider;
