import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import Redux from 'redux'
import {createStore} from 'redux'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <Counter />
      </div>
    );
  }
}

class Header extends Component {
  renderDescription = () => {
    const remainder = store.getState().count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${store.getState().count + upToNext}`;
  }

  render() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{this.renderDescription()}</h1>


    </header>
  );
}
}


const reducer = (state={count: 0}, action) =>{
  switch(action.type){
    case 'INCREMENT':
      return {count: state.count+action.amount}
    case 'DECREMENT':
      return {count: state.count-1}
    case 'ADD 2':
      return {count: state.count+action.amount}
    case 'ADD 5':
      return {count: state.count+action.amount}
    default:
      return state
  }
}

const store = createStore(reducer)

class Counter extends Component {

  increment = (a) => {
                                    //could also just write "amount:amount"
                                    //same as "amount"
    store.dispatch({type: 'INCREMENT', amount: a})
    this.setState({})
  };

  decrement = () => {
    store.dispatch({type: 'DECREMENT'})
    this.setState({})
  };

  renderDescription = () => {
    const count = this.getState().count
    const remainder = count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${count + upToNext}`;
  };

  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={()=>{this.increment(1)}}> + </button>
        <button onClick={()=>{this.increment(2)}}> +2 </button>
        <button onClick={()=>{this.increment(5)}}> +5 </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
