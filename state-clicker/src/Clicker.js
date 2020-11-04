import React, { Component } from 'react'

export default class Clicker extends Component {
    constructor(props){
        super(props)
        this.state = {
            num: 1
        }
    }

    handleClick = e => {
        let rand = Math.floor(Math.random() * 10)
        this.setState({num: rand})
    }

    render(){
        return(
            <div className="App">
                <h1>Number is: {this.state.num}</h1>
                {this.state.num===7 ? <h1>YOU WIN</h1> : <button onClick={ (e)=> {this.handleClick()} }>Generate Random Number</button>}
            </div>
        )
    }
}