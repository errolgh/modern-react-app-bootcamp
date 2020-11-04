import React, { Component } from 'react'
import './Pokecard.css'

const POKE_API = 'https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/'
// https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/4.png   // dynamic ${id}.png

export default class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${this.props.id}.png`
        return (
           <div className="Pokecard">
               <h1 className="Pokecard-title">{this.props.name}</h1>
               <img src={imgSrc} alt={this.props.name} />
               <div className="Pokecard-data">Type: {this.props.type} </div>
               <div className="Pokecard-data">EXP: {this.props.exp} </div>
           </div>
        )
    }
}