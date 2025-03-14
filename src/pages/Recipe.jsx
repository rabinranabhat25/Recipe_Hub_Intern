import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import Ratings from "../component/Ratings";
import { useState } from "react";

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

  // State for search input and category filter
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // List of unique categories for the dropdown (including "All")
  const categories = ["All", ...new Set(products.map((product) => product.category))];

  // Filter products based on search query and selected category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center mt-10">
        <h2 className="text-4xl font-semibold tracking-widest transform hover:scale-95 duration-500 hover:text-orange-500 text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
          Food Page
        </h2>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-4 md:space-y-0 md:space-x-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search recipes ......"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        {/* Category Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link to={`/recipe_description/${product.id}`} key={product.id}>
              <div className="flex m-4 justify-center items-center">
                <div className="w-56 rounded-md cursor-pointer shadow-lg shadow-purple-800 overflow-hidden hover:shadow-orange-400 transform hover:scale-105 duration-500">
                  <img src={product.img} alt={product.name} />
                  <div className="p-4 bg-white">
                    <span className="text-sm font-semibold text-red-50 bg-red-400 py-1 px-3 rounded-full">
                      {product.discount}
                    </span>
                    <h1 className="mt-2 font-bold text-2xl">{product.name}</h1>
                    <Ratings />
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-lg">No products found.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Recipe;