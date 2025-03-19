import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center mt-10">
        <h2 className="text-4xl font-semibold tracking-widest text-gray-900 uppercase">
          Favorite Recipes
        </h2>
      </div>

      <div className="flex flex-wrap justify-center mt-10">
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <Link to={`/recipe_description/${product.id}`} key={product.id}>
              <div className="w-56 m-4 rounded-md shadow-lg overflow-hidden">
                <img src={product.img} alt={product.name} />
                <div className="p-4 bg-white">
                  <h1 className="mt-2 font-bold text-2xl">{product.name}</h1>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-lg">No favorites yet.</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Favorites;
