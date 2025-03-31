import React, { useEffect, useState } from "react";
const url = "https://api.spoonacular.com/recipes/complexSearch";
const api_key = "91c7460d7a624dd78b7fefd300cd8d04";

const Search = ({foodData, setFoodData}) => {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${url}?query=${query}&apiKey=${api_key}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    };
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Search;
