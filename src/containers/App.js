
import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from "./robots";

import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';



// const state = {
//     robots: robots,
//     searchfield: ''
// }
class App extends Component {
    constructor(){
        super()
        this.state = { 
            robots: [],
            searchfield: ''
        }
    }
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(user => {
        this.setState({robots:user})
    })
}

    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
       }



    render() {
        const {robots,searchfield}= this.state;
         const filteredRobots = robots.filter(robot =>{
        return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    })
    if( robots.length === 0){
        return <h1 className='tc' >Loading</h1>
    }else
{
            return(
            <div className= 'tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange= {this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/> 
                    </ErrorBoundry>
           
            </Scroll>
            </div>
        );
        }
    }
  
}
export default App;