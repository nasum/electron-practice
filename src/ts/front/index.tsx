import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<{}, {}> {
  render(){
    return (
        <div>
          testtesttest
        </div>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementsByClassName('todo')[0]
);
