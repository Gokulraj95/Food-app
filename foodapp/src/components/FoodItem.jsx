import React from "react";

const FoodItem = ({ food }) => {
  return (
    <div>
        <img src= {food.image}/>
      <h1>{food.title}</h1>
      <button>View Recipe</button>
    </div>
  );
};

export default FoodItem;
