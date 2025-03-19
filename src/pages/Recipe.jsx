import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import Ratings from "../component/Ratings";
import { useState, useEffect } from "react";

const Recipe = () => {
  // Sample product list with added categories
  const products = [
    { id: 1, name: "Burger", img: "/img/burger.jpg", discount: "-30%", category: "Fast Food" },
    { id: 2, name: "Pizza", img: "/img/vegatable_pizza.jpg", discount: "-20%", category: "Fast Food" },
    { id: 3, name: "Sandwich", img: "/img/Sandwich.jpg", discount: "-15%", category: "Fast Food" },
    { id: 4, name: "Fries", img: "/img/Fries.png", discount: "-10%", category: "Sides" },
    { id: 5, name: "Hot Dog", img: "/img/Hot_dog.jpg", discount: "-25%", category: "Fast Food" },
    { id: 6, name: "Tacos", img: "/img/Tacos.jpg", discount: "-18%", category: "Mexican" },
    { id: 7, name: "Pasta", img: "/img/Pasta_Noodles.jpg", discount: "-22%", category: "Italian" },
    { id: 8, name: "Sushi", img: "/img/Red_sushi.jpg", discount: "-12%", category: "Japanese" },
    { id: 9, name: "Momo", img: "/img/Momo.jpg", discount: "-12%", category: "Asian" },
    { id: 10, name: "Samosa", img: "/img/Samosa.jpg", discount: "-50%", category: "Indian" },
    { id: 11, name: "Peda", img: "/img/Peda.jpg", discount: "-12%", category: "Dessert" },
    { id: 12, name: "Spring Roll", img: "/img/Spring_Roll.jpg", discount: "-12%", category: "Asian" },
    { id: 13, name: "Chicken Chilly", img: "/img/Chicken_Chilly.jpg", discount: "-12%", category: "Asian" },
    { id: 14, name: "Chaat", img: "/img/Chaat.jpg", discount: "-12%", category: "Indian" },
  ];

  // States for search, category filter, and favorites
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Toggle favorite status
  const toggleFavorite = (product) => {
    const isFavorite = favorites.some((fav) => fav.id === product.id);
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav.id !== product.id)
      : [...favorites, product];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const categories = ["All", ...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center mt-10">
        <h2 className="text-4xl font-semibold tracking-widest text-gray-900 uppercase">
          Food Page
        </h2>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-64 p-2 border border-gray-300 rounded-md"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-64 p-2 border border-gray-300 rounded-md"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product List */}
      <div className="flex flex-wrap justify-center mt-10">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex m-4">
            <Link to={`/recipe_description/${product.id}`}>
              <div className="w-56 rounded-md shadow-lg overflow-hidden">
                <img src={product.img} alt={product.name} />
                <div className="p-4 bg-white flex flex-wrap">
                  <span className="text-sm font-semibold bg-red-400 text-white py-1 px-3 rounded-full">
                    {product.discount}
                  </span>
                  <h1 className="mt-2 font-bold text-2xl">{product.name}</h1>
                  <Ratings />
                  <button
              onClick={(e) => {
                e.preventDefault();
                toggleFavorite(product);
              }}
              className={`p-2 ml-2 h-10 text-white rounded-md flex flex-wrap ${
                favorites.some((fav) => fav.id === product.id) ? "bg-orange-500" : "bg-gray-500"
              }`}
            >
              {favorites.some((fav) => fav.id === product.id) ? "Unfavorite" : "Favorite"}
            </button>
                </div>
              </div>
            </Link>
            
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Recipe;
