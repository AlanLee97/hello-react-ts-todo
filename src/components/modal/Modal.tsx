import React from "react";

interface IState {
  show: boolean;
}

export default class Modal extends React.Component{
  state: IState;
  constructor(props: any) {
    super(props);
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <div className="modal">
        {/* {...this.props.children} */}
      </div>
    )
  }
}