import React, { useState, useEffect } from 'react';
import { getMealById } from '../../api';
import { useParams, useNavigate } from 'react-router';
import { FanPreloader } from '../../main sections/preloader';

export const FanRecipe = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  const back = () => {
    navigate(-1);
  };

  return (
    <>
      {!recipe.idMeal ? (
        <FanPreloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h4>{recipe.strMeal}</h4>
          <h6>
            {' '}
            Категория: <span>{recipe.strCategory} </span>
          </h6>

          {recipe.strArea ? (
            <h6>
              Страна: <span> {recipe.strArea} </span>
            </h6>
          ) : null}
          
          <p>{recipe.strInstructions}</p>
          
          {recipe.strYoutube ? (
            <div className="row">
              <h5>Видео рецепт</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
              />
            </div>
          ) : null}

          <table className="centered">
            <thead>
              <tr>
                <th>Ingredienт</th>
                  <th>Measure</th>
              </tr>
             
            </thead>

            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('Ingredient') && recipe[key]) {

                  const strNumber = key.slice(13);
                  
                  return (
                    <tr key={key}>
                      {/* название ингредиентов */}
                      <td>{recipe[key]}</td> 
                      {/* колличество */}
                      <td>{recipe[`strMeasure${strNumber}`]}</td>
                    </tr>
            
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          <button className="btn btn-list btn-recipe" onClick={back}>
            вернуться
          </button>
        </div>
      )}
    </>
  );
};
