import { createContext, useEffect, useState } from "react";
import { fetchData } from "../Utils/fetchData";
export const Context = createContext();
const ProductsProvider = ({ children }) => {
  const [clothes, setClothes] = useState();
  const [favorites, setFavorites] = useState([]);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState();
  const [open, isOpen] = useState(false);

  const openModal = (product) => {
    setSelected(product);
    isOpen(!open);
  };

  const getClothes = async () => {
    const fetchClothes = await fetchData();
    setClothes(fetchClothes);
  };

  useEffect(() => {
    getClothes();
  }, []);

  const addFavorite = (product) => {
    if (favorites.find((e) => e.id === product.id)) {
    } else {
      setFavorites([...favorites, product]);
    }
  };
  const removeFavorite = (product) => {
    setFavorites((favorite) => favorite.filter((e) => e.id !== product.id));
  };

  const addBasket = (product) => {
    setBasket([...basket, product]);
    setTotal(total + Number(product.price));
    console.log(total);
  };
  return (
    <Context.Provider
      value={{
        favorites,
        addFavorite,
        clothes,
        removeFavorite,
        open,
        openModal,
        selected,
        addBasket,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProductsProvider;
