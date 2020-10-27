import React, {} from 'react';

//Importing CSS style
import style from "../recipe.module.css";

const Recipe = ({title, calories, image, ingredients}) =>
{
    return(
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <img className={style.image} src={image} alt=""/>
            <p className={style.calories}>{`${Math.round(calories)} Calories`}</p>
            <ol className={style.ingredients}>
                {ingredients.map(ingredient => (
                    <li key={Math.random(1, 10000)}>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;