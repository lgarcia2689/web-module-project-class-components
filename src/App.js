import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'



const goals = [
    {
      task: 'Learn setState()',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Style my Todo List',
      id: 1528817084358,
      completed: false
    }
  ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      goals: goals
    }
  }
  toggleItem = (id)=> {
    const newGoals = this.state.goals.map(item => {
      if (item.id === id) {
        return( {
          ...item,
          completed: !item.completed
        });
      } else {
        return item
      }
    });

    this.setState({
      goals:newGoals
    });
  };


  addItem = (itemTask) => {
    this.setState({
      goal:[...this.state.goals, {
        task:itemTask,
        id:this.state.goals.length,
        completed:false
      }]
    })
  };

  clearCompleted = (e) => {
    this.setState({
      goals:this.state.goals.filter(item => (!item.completed))
    })
  };

  


  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Todo List: MVP</h1>
           <TodoForm addItem={this.addItem}/>
         </div>
        <TodoList clearCompleted = {this.clearCompleted} toggleItem = {this.toggleItem} goals={this.state.goals}/>
      </div>
    );
  }
}

export default App;