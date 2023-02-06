// loops over the ingredients derived from props
// produces a clickable ingredient for each

import React, { Component } from 'react'
import Ingredient from './Ingredients'

export default class IngredientList extends Component {
    render () {
        let allIngredients = this.props.ingredients.map((ing, i) => (
            // produce a list item for each
            <li key={i}>
                <Ingredient 
                    ingredient={ing}
                    itemKey={i}
                    clickFunc={this.props.add}
                />
            </li>
        ))

        return (
            <section className='pane'>
                <h3>Ingredient List</h3>
                <ul>
                    { allIngredients }
                </ul>
            </section>
        )
    }
}