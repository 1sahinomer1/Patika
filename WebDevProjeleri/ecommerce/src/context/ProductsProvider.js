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
  // useEffect(() => {
  //   findBasket();
  // }, [basket]);
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
    if (basket.find((e) => e.id === product.id)) {
      setTotal(total + Number(product.price));
    } else {
      setBasket([...basket, product]);
      setTotal(total + Number(product.price));
      console.log(total);
    }
    product.count++;
    console.log(product);
  };
  const removeBasket = (product) => {
    if (basket.find((e) => e.id === product.id) && product.count >= 1) {
      product.count--;
      setTotal(total - Number(product.price));
      if (product.count == 0) {
        setBasket((item) => item.filter((e) => e.id !== product.id));
      }
    }
    console.log(product);
  };
  const howMuch = (product) => {
    return product.count;
  };
  // const findBasket = (product) => {
  //   let temp = 0;
  //   if (basket.find((e) => e.id === product.id)) {
  //     temp++;
  //   }
  //   return temp;
  // };
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
        basket,
        total,
        removeBasket,
        howMuch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProductsProvider;
