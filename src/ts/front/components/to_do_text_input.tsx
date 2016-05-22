import * as React from 'react';

const ENTER_KEY_CODE = 13;

interface Props {
  text: String;
  changeText: Function;
}

export default class ToDoTextInput extends React.Component<Props, {}> {
  constructor(props: Props, {}) {
      super(props);
  }

  private onChange(event: React.FormEvent): void {
    this.props.changeText(event);
  }

  private onKeyDown(event: React.KeyboardEvent): void {
      if (event.keyCode === ENTER_KEY_CODE) {
          alert('enter')
      }
  }

  render(): JSX.Element {
      return (
          <input type="text"
            onChange={(event: React.FormEvent) => {
                this.onChange(event);
            }}
            onKeyDown={(event: React.KeyboardEvent) => {
              this.onKeyDown(event);
            }}
            value={this.props.text}
          />
      );
  }
}
