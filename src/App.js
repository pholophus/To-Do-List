import React, { Component }  from 'react';
import List from './List';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: ["todo1", "todo2"],
      active: false,
    };
  }

  toggleClass = (event) => {
    var toogle = this.state.active; 
    
    this.setState({ active: !toogle}, () =>
    {event.target.style.textDecoration = toogle ? "line-through" : ""});

  }
  //we do not need to bind the functions because we are using arrow functions
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      //firstly we will deconstruct and then append the new term in the items array
      items: [...this.state.items, this.state.term]
    });
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onDelete = (event) => {
    this.setState({ items: this.state.items.filter(item => item !== event.target.value)});
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
      </form>
      <List onDelete={this.onDelete} class={this.toggleClass} items={this.state.items} cond={this.state.active}/>
      </div>
    );
  }
}
