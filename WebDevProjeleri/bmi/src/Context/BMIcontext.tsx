import { createContext, useState, FC } from "react";
import { BmiContextState } from "./Types";

const contextDefaultValues: BmiContextState = {
  weight: 0,
  height: 0,
  handleChange() {},
};

export const BMIcontext = createContext<BmiContextState>(contextDefaultValues);

const BMIContextProvider: FC = ({ children }) => {
  const [weight, setWeight] = useState<number | undefined>(
    contextDefaultValues.weight
  );
  const [height, setHeight] = useState<number | undefined>(
    contextDefaultValues.height
  );

  function handleChange(event: any) {
    let value = event.target.value;
    setWeight(value);
  }
  return (
    <BMIcontext.Provider value={{ weight, height, handleChange }}>
      {children}
    </BMIcontext.Provider>
  );
};

export default BMIcontext;
