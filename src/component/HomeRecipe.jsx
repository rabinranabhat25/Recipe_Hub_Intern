
import { Link } from "react-router-dom";
import Ratings from "./Ratings";

const HomeRecipe = () => {
  // Sample product list
  const products = [
    { id: 1, name: "Burger", img: "/img/burger.jpg", discount: "-30%" },
    { id: 2, name: "Pizza", img: "/img/vegatable_pizza.jpg", discount: "-20%" },
    { id: 3, name: "Sandwich", img: "/img/Sandwich.jpg", discount: "-15%" },
    { id: 4, name: "Fries", img: "/img/Fries.png", discount: "-10%" },
    { id: 5, name: "Hot Dog", img: "/img/Hot_dog.jpg", discount: "-25%" },
    { id: 6, name: "Tacos", img: "/img/Tacos.jpg", discount: "-18%" },
    { id: 7, name: "Pasta", img: "/img/Pasta_Noodles.jpg", discount: "-22%" },
    { id: 8, name: "Sushi", img: "/img/Red_sushi.jpg", discount: "-12%" },
    { id: 9, name: "Momo", img: "/img/Momo.jpg", discount: "-12%" },
    { id: 14, name: "Chaat", img: "/img/Chaat.jpg", discount: "-12%" },
  ];

  return (
    
    <>
    
      <div className="flex flex-wrap justify-center mt-24">
        
        {products.map((products) => (
          <Link to={`/recipe_description/${products.id}`}><div
            key={products.id}
            className="flex m-4 justify-center items-center"
          >
            <div className="flex flex-wrap">
              <div className="w-56 rounded-md cursor-pointer shadow-lg shadow-purple-800 overflow-hidden hover:shadow-orange-400 transform hover:scale-105 duration-500">
                <img src={products.img} alt={products.name} />
                <div className="p-4 bg-white">
                  <span className="text-sm font-semibold text-red-50 bg-red-400 py-1 px-3 rounded-full">
                    {products.discount}
                  </span>
                  <h1 className="mt-2 font-bold text-2xl">{products.name}</h1>
                  <Ratings/>
                </div>
              </div>
            </div>
          </div></Link>
        ))}
      </div>
       

      
    </>
  );
};

export default HomeRecipe;
