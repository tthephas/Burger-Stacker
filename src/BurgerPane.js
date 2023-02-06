// loop over an array of ingredients
// ones that were added by clicking each ingredient in the list

import React, { Component } from "react";

// since ingredient is a reusable component, we can import that too

import Ingredient from "./Ingredients";

export default class BurgerPane extends Component {
    render () {

        let burgerBits = this.props.ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient 
                    itemKey={i}
                    ingredient={ing}
                />
                 </li>
        ))

        return (
            <section className="pane">
                <h3>Burger Pane</h3>
                <ul>
                    { burgerBits }

                </ul>
                <button  
                    onClick={this.props.clear}>Clear Burger
                </button>

            </section>
        )
    }
    
}