
import React from 'react'
import MealSeacrh from './components/MealSeacrh';
import Image from 'next/image';
export default async function page({searchParams}) {
  
  const query = searchParams

  const getMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      // console.log(data?.meals);
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

const meals = await getMeals()
  return (
    <div>
      <div>
    <MealSeacrh />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto">
      {meals?.map((meal) => (
        <>
          <div className="card bg-base-100 w-72 shadow-xl" key={meal.idMeal}>
            <figure>
              <Image
                src={meal?.strMealThumb}
                width={617}
                height={617}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{meal.strMeal}</h2>
              <p>{meal.strCategory}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
    </div>
  );

}



