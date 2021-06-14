import { useContext } from "react";
import { Context } from "../context/ProductsProvider";
import Favorited from "./Favorited";

const Favorite = () => {
  const { favorites } = useContext(Context);
  console.log("favorites: " + favorites);
  return (
    <div>
      {favorites && (
        <div className="favoritesPage">
          {favorites.map((favorited) => {
            return (
              <div className="favoriteds">
                <Favorited favorited={favorited}></Favorited>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Favorite;
