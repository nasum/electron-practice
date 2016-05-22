import * as React from 'react';
import * as ToDoItemImpl from './interface/todo_item_impl';

export default class ToDoItem extends React.Component<any, any>{
  constructor(props, {}) {
      super(props);
  }

  render(): JSX.Element {
    return (
      <li onClick={this.onClick}>
        {this.props.name}
      </li>
    )
  }

  private onClick = (e) => {
    this.props.checkDone(e)
  }
}
