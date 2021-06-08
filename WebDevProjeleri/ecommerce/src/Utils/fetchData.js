import axios from "axios";
export const fetchData = async () => {
  const response = await axios.get(
    "https://60be30f98a571b00176e8648.mockapi.io/api/"
  );
  return response;
};
