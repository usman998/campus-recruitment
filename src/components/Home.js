// import { render } from '@testing-library/react';
import React from 'react';



export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            // name: 'zain',
            // email: 'zain@gmail.com ',
            // value: ''
            todos: ['Zain', 'Ali', 'Khan'],
            value: ''
        }

    }

    // set_name = () => {
    //     console.log(this.state.name)
    //     this.setState({
    //         name: this.state.value,
    //         email: 'ali@gmail.com '
    //     })
    // }

    // handleChange = (e) => {
    //     // console.log(e.target.name)
    //     // console.log(e.target.value) 
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }

    addTodo = () => {
        this.state.todos.push(this.state.value)
        this.setState({
            todos: this.state.todos
        })
    }

    render() {
        return (
            <div>
                {/* <h2>My name is {this.state.name}</h2> */}
                {/* <h2>My Email is {this.state.email}</h2> */}
                {/* e.target.value   input ki value ho gi wo mil jaye gi */}
                {/* e.target sa input ki kuch bi value mil jaye gi */}
                {/* <input type="text" onChange={(e) => this.setState({ value: e.target.value })}></input>
                <input type="text" onChange={(e) => this.setState({ value: e.target.value })}></input> */}
                {/* <input type="text" name="name" onChange={(e) => this.handleChange(e)}></input> */}
                {/* <input type="text" name="email" onChange={(e) => this.handleChange(e)}></input> */}
                {/* <button onClick={this.set_name}>Set</button> */}
                <ul>
                    {/* {list.map(items, index) =>(
                        return <li>


                    </li>
                        )} */}
                    <input value={this.state.value} type="text" placeholder='Enter todos' onChange={(e) => this.setState({ value: e.target.value })} />
                    <button onClick={this.addTodo}>Add todos</button>
                    {this.state.todos.map((items, index) => {
                        return <li key={index} >{items}</li>

                    }
                    )}
                </ul>
            </div>
        )

    }
}