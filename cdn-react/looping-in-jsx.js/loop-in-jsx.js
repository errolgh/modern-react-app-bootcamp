class Messages extends React.Component {
    render(){
        const msgs = [
            {id: 1, text: "Greetings!"},
            {id: 2, text: "Goodbye!"}
        ]
        return(
            <ul>
                { msgs.map(m => <li>{m.text}</li>) }
            </ul>
        )
    }
}



// class App extends React.Component {
//     render(){
//         return(
//             <div>
//                 <Friend
//                     name="Frida"
//                     hobbies={"Painting", "Drawing", "Sculpting"}
//                 />
//             </div>
//         )
//     }
// }

// ReactDOM.render(<App/>, document.getElementById('root'))





// class Friend extends React.Component {
//     render(){
//         const {name, hobbies} = this.props
//         return(
//             <div>
//                 <h1>{name}</h1>
//                 <ul>
//                     {hobbies.map(h => <li>{h}</li>)}
//                 </ul>
//             </div>

//         )
//     }
// }