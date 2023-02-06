// display individual ingredients
import React, { Component } from "react"

// recieves one ingred as a prop and displays it

export default class Ingredient extends Component {
    render () {
        // destructure the ingredient properties
        const { name, color } = this.props.ingredient

        return (
            <p 
                style={{backgroundColor: color}}
                id={this.props.itemKey}
                onClick={this.props.clickFunc}
            >
                {name}
            </p>
        )
    }
}