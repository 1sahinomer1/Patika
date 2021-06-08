import axios from "axios";
import { useState, useEffect } from "react";
import { fetchData } from "./Utils/fetchData";

function App() {
  const [clothes, setClothes] = useState();

  useEffect(() => {
    axios
      .get("https://60be30f98a571b00176e8648.mockapi.io/api/clothes")
      .then((response) => setClothes(response.data));
  }, []);
  console.log(clothes);
  return (
    <div>
      {clothes.map((clothe) => {
        return (
          <div key={clothe.id}>
            <h4>{clothe.price}</h4>
            <img src={clothe.image} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
