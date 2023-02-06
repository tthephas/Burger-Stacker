import React, { Component } from "react";
import IngredientList from "./IngredientList";
import BurgerPane from "./BurgerPane";

export default class BurgerStacker extends Component {
    state = {
        ingredients: [
            {name: 'Kaiser Bun', color: 'saddlebrown'},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'},
            {name: 'Cheese', color: 'gold'}
        ],
        burgerIngredients: []
    }

    // function to add items to the burgerIngredients array in state
    addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor

//helps with testing
        //console.log('what was clicked', e.target)
        console.log(`clicked on ${ingName} and it is ${ingColor}`)

        this.setState({
            burgerIngredients: [
                { name: ingName, color: ingColor },
                ...this.state.burgerIngredients //includes and adds it on top to existing
            ]

        })

    }
// empties the burger ingred array allowing user to start over
    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }


    render () {
        return (
            <div>
                <h1>BurgerStacker</h1>
                <div className="panes">
                <IngredientList 
                
                    ingredients={this.state.ingredients}
                    add={this.addToStack}
                />
                <BurgerPane 
                    ingredients={this.state.burgerIngredients}
                    clear={this.clearBurger}
                />
                </div>

            </div>
        )
    }
}
