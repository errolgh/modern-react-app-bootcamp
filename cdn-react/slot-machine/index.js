// import Machine from './Machine.js'

class App extends React.Component {

    render(){

        return (
            <div>
                <h1>Slot Machines!</h1>
                <Machine 
                    s1="x"
                    s2="x"
                    s3="x"
                />
                <Machine 
                    s1="x"
                    s2="x"
                    s3="y"
                />
                <label htmlFor="textInput" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))


// class Box extends React.Component {
//     render(){
//         const colors = {
//             color: this.props.favoriteColor,
//             backgroundColor: this.props.otherColor
//         }
//         return(
//             <b style ={colors}>{this.props.message}</b>
//         )
//     }
// }