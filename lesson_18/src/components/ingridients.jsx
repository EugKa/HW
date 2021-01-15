import React from 'react';
import '../styles/ingridients.scss'
export class Ingredients extends React.Component {

    render() {
        const ing = [];
        // Get all ingredients from the object. Up to 20
        for (let i = 1; i <= 20; i++) {
            if (this.props.ingredients[0][`strIngredient${i}`]) {
                ing.push(`${this.props.ingredients[0][`strIngredient${i}`]} - ${this.props.ingredients[0][`strMeasure${i}`]}`)
            } else {
                // Stop if no more ingredients
                break;
            }
        }


        return <div className="ingridients">
            <h3 className="ingridients__title">Ingridients : </h3>
            {ing.map(items => {
                return <div key={items}>{items}</div>
            })}</div>
    }

}