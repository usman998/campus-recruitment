import React from 'react'

// export default class Child extends React.Component {
//     constructor() {
//         super()
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.props.name}</h1>
//                 <h1>Rs.{this.props.price}</h1>
//             </div>


//         )


//     }


// }


const Child = (props) => {
    console.log(props)
    return <h1>Hello {props.name}</h1>
}

export default Child