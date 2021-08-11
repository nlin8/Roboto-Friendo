import React, { Component } from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({robots: users}));
        
    }

    onSearchChange = (event) => {
        //console.log(event.target.value);
        this.setState({searchfield: event.target.value});
        
        //console.log(filteredRobots);
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        //console.log(filteredRobots);
        if(robots.length === 0){
            return <h1>Loading</h1>
        } else{
            return[
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            ];
        }
    }
   
}

export default App;