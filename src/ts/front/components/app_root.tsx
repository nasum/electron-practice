import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ToDoTextInput from './to_do_text_input';
import ToDoList      from './todo_list';
import * as State    from './interface/states_impl';

export default class App extends React.Component<{}, State.ToDoState> {
  constructor(props: {}){
    super(props);
    this.state = {
      text: "hoge",
      todos: []
    }
  }

  render(){
    return (
        <div>
          <form onSubmit={this.buttonClick}>
            <ToDoTextInput text={ this.state.text } changeText={this.changeText} ></ToDoTextInput>
            <input type="submit" value="Post" />
          </form>
          <ToDoList todos={ this.state.todos } checkDone={this.checkDone} />
        </div>
    );
  }

  // "this" is App
  private changeText = (event: React.FormEvent) => {
    this.setState({
      text: event.target['value'],
      todos: this.state.todos
    });
  }

  private checkDone = (e) => {
    console.log(e)
  }

  private buttonClick = (e) => {
    e.preventDefault();
    const inputText = this.state.text;
    const todos = this.state.todos;

    todos.push({
      key: todos.length,
      name: inputText,
      done: false
    });

    this.setState({
      text: inputText,
      todos: todos
    });
    return;
  }
}
