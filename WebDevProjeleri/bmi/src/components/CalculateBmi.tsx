import { useState } from "react";
import Modal from "./Modal";

const CalculateBmi = () => {
  let [weight, setWeight] = useState("");
  let [height, setHeight] = useState("");
  let [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div>
      <form action="">
        <label htmlFor="Height">Height</label>
        <input type="number" onChange={(e) => setWeight(e.target.value)} />
        <label htmlFor="">Weight</label>
        <input type="number" onChange={(e) => setHeight(e.target.value)} />
        <button onClick={() => setIsOpen(!isOpen)}>Calculate</button>
      </form>
      {isOpen && <Modal></Modal>}
    </div>
  );
};

export default CalculateBmi;
