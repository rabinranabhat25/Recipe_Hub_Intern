
import { Link } from "react-router-dom";


const Feature = () => {
  // Sample product list
  const CreateRecipe = [
    { id: 1, name: "", img: "/img/img2.png" }
    
  ];
  const Favourite = [
    { id: 1, img: "/img/fav.png" }
    
  ];

  return (
    
    <>
    
      <div className="flex flex-wrap justify-center mt-24">
        
        {Favourite.map((Fav) => (
          <Link to={"/fav"}><div
            key={Fav.id}
            className="flex m-4 justify-center items-center"
          >
            <div className="flex flex-wrap">
              <div className="w-56 rounded-md cursor-pointer shadow-lg shadow-purple-800 overflow-hidden hover:shadow-orange-400 transform hover:scale-105 duration-500">
                <img src={Fav.img} alt={Fav.name} />
                <div className="p-4 bg-white">
                  
                  <h1 className="mt-2 font-bold text-2xl">{Fav.name}</h1>
                 
                </div>
              </div>
            </div>
          </div></Link>
        ))}
      




      {/* ------------------------------------------- */}



      
        
        {CreateRecipe.map((Recipe) => (
          <Link to={"/addrecipe"}><div
            key={Recipe.id}
            className="flex m-4 justify-center items-center"
          >
            <div className="flex flex-wrap">
              <div className="w-56 rounded-md cursor-pointer shadow-lg shadow-purple-800 overflow-hidden hover:shadow-orange-400 transform hover:scale-105 duration-500">
                <img src={Recipe.img} alt={Recipe.name} />
                <div className="p-4 bg-white">
                  
                  <h1 className="mt-2 font-bold text-2xl">{Recipe.name}</h1>
                 
                </div>
              </div>
            </div>
          </div></Link>
        ))}
      </div>
       

      
    </>
  );
};

export default Feature;
