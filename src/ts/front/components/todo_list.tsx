import * as React from 'react';
import ToDoItem from './todo_item';

export default class ToDoList extends React.Component<any, any>{
  constructor(props, {}) {
      super(props);
  }

  render(): JSX.Element {
    let todoItems:JSX.Element[] = [];

    console.log(this.props.todos);

    for(let i = 0; i < this.props.todos.length; i++){
      const item = this.props.todos[i];
      todoItems.push(<ToDoItem key={item.key} name={item.name} done={item.done} checkDone={this.props.checkDone}/>)
    }

    return (
        <ul>
          {todoItems}
        </ul>
    );
  }
}
