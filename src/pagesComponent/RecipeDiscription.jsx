import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

const RecipeDescription = () => {
  const { recipeId } = useParams();
  const [timer, setTimer] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [notification, setNotification] = useState('');

  // Sample data for recipes
  const menuItems = 
  [
    { 
      id: 1, 
      name: 'Burger', 
      price: 200, 
      image: '/img/burger.jpg', 
      ingredients: ['Bun', 'Patty', 'Lettuce', 'Tomato', 'Cheese'],
      instructions: [
        { step: 'Mix minced chicken with spices, onion, garlic, chili, mayonnaise, and an egg.' },
        { step: 'Shape into patties and cook until golden brown.' },
        { step: 'Toast the burger buns with a little butter.' },
        { step: 'Place lettuce, cooked patty, cheese, tomato, and onion on the bun.' },
        { step: 'Add mayonnaise or ketchup, then top with the other bun.' },
        { step: 'Serve hot with fries and a drink.' }
      ],
      TotalCookingTime: 5, // in minutes
      description: "A classic and juicy burger made with fresh ingredients, perfect for satisfying your hunger."
    },
    {
      id: 2,
      name: "Pizza",
      image: "/img/vegatable_pizza.jpg",
      discount: "-20%",
      price: 300,
      ingredients: ["Dough", "Tomato Sauce", "Cheese", "Vegetables"],
      instructions: [
        {step: 'Preheat oven to 220°C (425°F).'},
        {step: 'Roll out the dough into a circular shape.'},
        {step: 'Spread tomato sauce evenly over the dough.'},
        {step: 'Sprinkle cheese generously over the sauce.'},
        {step: 'Add chopped vegetables as toppings.'},
        {step: ' Bake for 15-20 minutes until golden and crispy.'},
        {step: 'Let it cool for a few minutes before serving.'}
        
      ],
      description: "A delicious vegetable pizza with a crispy crust, loaded with fresh toppings and melted cheese."
    },
    {
      id: 3,
      name: "Sandwich",
      image: "/img/Sandwich.jpg",
      discount: "-15%",
      price: 150,
      ingredients: ["Bread", "Lettuce", "Tomato", "Cucumber", "Cheese", "Sauces"],
      instructions: [
        {step: 'Take two slices of bread.'},
        {step: 'Spread your choice of sauce on each slice.'},
        {step: 'Layer lettuce, tomato, cucumber, and cheese between the slices.'},
        {step: 'Press lightly and cut diagonally.'},
        {step: 'Serve fresh.'}
        
      ],
      description: "A tasty sandwich filled with fresh veggies and sauces, served in soft bread."
    },
    {
      id: 4,
      name: "Fries",
      image: "/img/Fries.png",
      discount: "-10%",
      price: 100,
      ingredients: ["Potatoes", "Salt", "Oil"],
      instructions: [
        {step: 'Peel and cut potatoes into thin strips.'},
        {step: 'Heat oil in a deep fryer or pan.'},
        {step: 'Fry potato strips until golden brown.'},
        {step: 'Remove from oil and drain on paper towels.'},
        {step: 'Sprinkle salt and serve hot.'}
      ],
      description: "Golden and crispy French fries, served hot and seasoned to perfection."
    },
    {
      id: 5,
      name: "Hot Dog",
      image: "/img/Hot_dog.jpg",
      discount: "-25%",
      price: 180,
      ingredients: ["Hot Dog Bun", "Sausage", "Mustard", "Ketchup", "Crispy Onions"],
      instructions: [
        {step: 'Grill or pan-fry the sausage until cooked.'},
        {step: 'Place the sausage inside the hot dog bun.'},
        {step: 'Drizzle mustard and ketchup on top.'},
        {step: 'Sprinkle crispy onions for extra crunch.'},
        {step: 'Serve hot.'}
       
      ],
      description: "A mouth-watering hot dog served with mustard, ketchup, and crispy onions."
    },
    {
      id: 6,
      name: "Tacos",
      image: "/img/Tacos.jpg",
      discount: "-18%",
      price: 220,
      ingredients: ["Tortillas", "Meat", "Fresh Salsa", "Cheese"],
      instructions: [
        {step: 'Cook the meat with spices until fully done.'},
        {step: 'Warm the tortillas on a dry pan.'},
        {step: 'Place the cooked meat onto the tortillas.'},
        {step: 'Top with fresh salsa and cheese.'},
        {step: 'Fold the tacos and serve warm.'}
       
      ],
      description: "Spicy and flavorful tacos filled with meat, fresh salsa, and cheese."
    },
    {
      id: 7,
      name: "Pasta",
      image: "/img/Pasta_Noodles.jpg",
      discount: "-22%",
      price: 250,
      ingredients: ["Pasta", "Cream Sauce", "Garlic", "Herbs"],
      instructions: [
        {step: 'Boil pasta until al dente and drain.'},
        {step: 'Sauté garlic in butter until fragrant.'},
        {step: 'Add cream sauce and herbs, then simmer.'},
        {step: 'Mix pasta with the sauce and cook for a few minutes.'},
        {step: 'Serve warm with grated cheese.'},
        
      ],
      description: "A creamy and delicious pasta dish with rich sauce and fresh herbs."
    },
    
    
      {
        id: 8,
        name: "Sushi",
        image: "/img/Red_sushi.jpg",
        discount: "-12%",
        price: 400,
        ingredients: ["Sushi Rice", "Nori", "Fish", "Cucumber", "Avocado", "Soy Sauce"],
        instructions: [
          {step: "Cook sushi rice and mix with rice vinegar."},
          {step: "Place a nori sheet on a bamboo mat."},
          {step: "Spread rice evenly on the nori, leaving a small gap at the edges."},
          {step: "Add fish, cucumber, or avocado on top."},
          {step: "Roll the sushi tightly using the mat."},
          {step: "Slice into bite-sized pieces and serve with soy sauce."}
        ],
        description: "Fresh and authentic sushi rolls made with high-quality ingredients."
      },
      {
        id: 9,
        name: "Momo",
        image: "/img/Momo.jpg",
        discount: "-12%",
        price: 180,
        ingredients: ["Flour", "Water", "Minced Meat", "Vegetables", "Spices", "Soy Sauce"],
        instructions: [
          {step: "Prepare dough with flour and water. Let it rest."},
          {step: "Mix minced meat/vegetables with spices and soy sauce."},
          {step: "Roll dough into small circles and fill with stuffing."},
          {step: "Fold and seal into dumpling shapes."},
          {step: "Steam for 10–15 minutes. Serve with spicy chutney."}
        ],
        description: "Steamed dumplings filled with flavorful meat or vegetables, served with spicy chutney."
      },
      {
        id: 10,
        name: "Samosa",
        image: "/img/Samosa.jpg",
        discount: "-50%",
        price: 50,
        ingredients: ["Potatoes", "Peas", "Flour", "Spices", "Oil"],
        instructions: [
          {step: "Boil and mash potatoes, mix with peas and spices."},
          {step: "Prepare dough with flour, oil, and water."},
          {step: "Roll into thin sheets, cut into halves, and shape into cones."},
          {step: "Fill with stuffing and seal edges."},
          {step: "Deep-fry until golden brown."}
        ],
        description: "Crispy and spicy samosas filled with a savory potato and pea mixture."
      },
      {
        id: 11,
        name: "Peda",
        image: "/img/Peda.jpg",
        discount: "-12%",
        price: 80,
        ingredients: ["Condensed Milk", "Sugar", "Nuts"],
        instructions: [
          {step: "Heat condensed milk in a pan on low heat."},
          {step: "Add sugar and mix well."},
          {step: "Stir until the mixture thickens and forms a dough-like consistency."},
          {step: "Shape into small round pedas."},
          {step: "Garnish with nuts and let them cool before serving."}
        ],
        description: "A sweet Indian delicacy made from condensed milk and sugar, perfect for dessert lovers."
      },
      {
        id: 12,
        name: "Spring Roll",
        image: "/img/Spring_Roll.jpg",
        discount: "-12%",
        price: 120,
        ingredients: ["Vegetables", "Flour", "Seasonings", "Oil"],
        instructions: [
          {step: "Chop vegetables and sauté them lightly with seasonings."},
          {step: "Prepare a thin dough and roll it out into small sheets."},
          {step: "Place the vegetable filling inside and roll tightly."},
          {step: "Seal the edges with water or flour paste."},
          {step: "Deep-fry until golden and crispy. Serve with dip."}
        ],
        description: "Crispy and delicious spring rolls stuffed with fresh vegetables and served with a tangy dip."
      },
      {
        id: 13,
        name: "Chicken Chilly",
        image: "/img/Chicken_Chilly.jpg",
        discount: "-12%",
        price: 250,
        ingredients: ["Chicken", "Soy Sauce", "Bell Peppers", "Onions", "Spices", "Chili Sauce"],
        instructions: [
          {step: "Marinate chicken with soy sauce, ginger, garlic, and spices."},
          {step: "Heat oil in a pan and fry the marinated chicken until golden brown."},
          {step: "In the same pan, sauté bell peppers and onions."},
          {step: "Add the fried chicken back into the pan."},
          {step: "Mix with chili sauce and soy sauce. Cook for a few minutes and serve hot."}
        ],
        description: "Spicy and tangy chicken cooked with bell peppers, onions, and special sauces."
      },
      {
        id: 14,
        name: "Chaat",
        image: "/img/Chaat.jpg",
        discount: "-12%",
        price: 100,
        ingredients: ["Puris", "Samosas", "Potatoes", "Chickpeas", "Yogurt", "Chutneys", "Chaat Masala", "Sev"],
        instructions: [
          {step: "Prepare crispy puris or samosas as the base."},
          {step: "Top with boiled potatoes and chickpeas."},
          {step: "Drizzle yogurt, tamarind chutney, and green chutney over the top."},
          {step: "Sprinkle with chaat masala and sev."},
          {step: "Serve fresh and enjoy."}
        ],
        description: "A flavorful and tangy Indian street food dish, topped with yogurt and chutneys."
      }
];
    

  

  const product = menuItems.find(item => item.id.toString() === recipeId);

  // Check if product exists before accessing its properties
  const totalCookingTime = product ? product.TotalCookingTime * 60 : 0;

  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTime => prevTime - 1);
      }, 1000);
    } else if (timer === 0 && isRunning) {
      setIsRunning(false);
      setNotification('The recipe is ready! Enjoy your meal.');
      window.alert('The recipe is ready! Enjoy your meal.');
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const startTimer = () => {
    setTimer(totalCookingTime);
    setIsRunning(true);
    setNotification('');
  };

  // Handle product not found
  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-600">Product not found!</h2>
        <p className="text-gray-700">Please check the product ID or go back to the menu.</p>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 bg-white shadow-2xl rounded-lg p-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">{product.name}</h2>
              <p className="text-2xl font-bold text-green-600">${product.price}</p>
              <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg">
                Add to Cart
              </button>
              <p className="text-gray-700 text-lg leading-relaxed">
                A delicious and filling {product.name}, perfect for any occasion.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Ingredients</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-700">
              {product.ingredients.map((ingredients, index) => (
                <li key={index} className="bg-gray-200 px-4 py-2 rounded-md shadow">{ingredients}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Instructions</h3>
            <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700">
              {product.instructions.map((step, index) => (
                <li key={index} className="bg-gray-100 px-4 py-2 rounded-md shadow">
                  {step.step}
                </li>
              ))}
            </ol>
          </div>

          {/* Start Timer Button */}
          <div className="mt-6 text-center">
            {!isRunning ? (
              <button
                onClick={startTimer}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Start Recipe Timer
              </button>
            ) : (
              <div className="mt-6 text-2xl font-semibold text-red-600">
                Timer: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
              </div>
            )}
          </div>

          {/* Display Notification */}
          {notification && (
            <div className="mt-6 text-xl text-center text-green-600 font-semibold">
              {notification}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecipeDescription;
