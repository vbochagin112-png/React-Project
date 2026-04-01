//Приложение лайк на Классовых компонентах

import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state =  {
            count: 0,
        };
    }

    toggleLike = () => {
        if (this.state.count === 1){
            this.setState({
               count: (this.state.count - 1)
            })
        } else {
            this.setState({
                count: (this.state.count + 1)
            })
        }
        
        };
    


    render() {
        return (
            <button className="btnLiked" onClick={this.toggleLike}>
        {this.state.count ? '❤️️' : '💔' } лайк: 
        {this.state.count}
        </button>
    )}
}


export default App

// Приложение "Лайк" v
// import React, { useState } from "react";
// import './liked.css'


// const App = () => {
//     const [liked, setLiked] = useState(false)
//     const [count, setCount] = useState(0)

//     const toggleLike = () => {
//         if (liked) {
//             setCount(count - 1)
//         } else {
//             setCount(count + 1)
//         }

//         setLiked(!liked)
//     }


//     return ( <>
//         <button className="btnLiked" onClick={toggleLike}>
//         {liked ? '❤️️' : '💔' } лайк: {count}
//         </button>
//         </>
//     );
// };

// export default App


//Функциональный компонент (Счетчик v)
// import React, { useState } from "react";

// const App = () => {

//     const [count, setCount] = useState(0)

//     const increment = () => {
//         setCount(count + 1)
//     }

//     const decrement = () => {
//         setCount(count - 1)
//     }

//     return (
//     <>
//         <div>
//             <h1>Счетчик: {count}</h1>
//             <button onClick={increment}>+</button>
//             <button onClick ={decrement}>-</button>
            
//         </div>
//     </>
//     )
// }

// export default App;
