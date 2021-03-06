import { useContext } from "react";
import { Context } from "../context/ProductsProvider";
import Modal from "./Modal";
import Product from "./Product";

const Home = () => {
  const { clothes, open } = useContext(Context);

  return (
    <>
      {clothes && (
        <div className="homePage">
          {clothes.map((e) => {
            return (
              <div className="products">
                <Product product={e}></Product>
              </div>
            );
          })}
          {open && <Modal></Modal>}
        </div>
      )}
    </>
  );
};

export default Home;
