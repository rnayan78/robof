import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/scroll';
import SearchBox from '../components/SearchBox'; 
import './App.css';
import ErrorBoundary  from '../components/ErrorBoundary';



class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''

        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(response =>  response.json())
         .then(users => this.setState({robots: users}));
       
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value })
       
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(!this.state.robots.length){
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
        
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange= {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                        </ErrorBoundary>

                        
                    </Scroll>
                    
                </div>
            );

        }
        
    }
    
}
export default App;