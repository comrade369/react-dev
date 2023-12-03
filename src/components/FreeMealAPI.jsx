import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../style.css";

function FreeMealAPI() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res) => {
            setItems(res.data.meals);
        }).catch((error) => {
            console.log(error);
        })
    });

    const listitems = items.map(({strMeal, strMealThumb, idMeal}) => {
        return (
            <section className="card">
                <img src={strMealThumb} alt={"The image of " + strMeal} />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        );
    }, []);

    return (
        <div className="items-container">
            {listitems}
        </div>
    );
}

export default FreeMealAPI;