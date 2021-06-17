import React, { useState } from "react";
import './style.scss';
import Modal from "../modal/Modal";


interface IState {
  showModal?: boolean;
}

// 操作栏
export default class OperationBar extends React.Component<IState> {
  state: IState;
  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false
    }
  }
  handleClick = () => {
    this.setState({
      showModal: true
    })
  }

  // static getDerivedStateFromProps(pre: any, next: any) {
  //   console.log('pre->', pre, 'next->', next);
  //   return true;
  // }
  
  render() {
    const {showModal} = this.state;
    return (
      <div className="operation-bar">
        <div className="btn" onClick={this.handleClick}>添加</div>
        <div className="btn">筛选</div>
        <Modal show={showModal as boolean}>
          <div>222222</div>
        </Modal>
      </div>
    )
  }
}