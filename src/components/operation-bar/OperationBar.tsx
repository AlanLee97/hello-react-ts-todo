import React from "react";
import './style.scss';
import Modal from "../modal/Modal";
import { connect } from "react-redux";
import { ITodoItem } from "../../interfaces";


interface IState {
  showModal?: boolean;
  title?: string;
  content?: string;
}

interface IProps {
  addTodo: (todoItem: ITodoItem) => void;
}

// 操作栏
class OperationBar extends React.Component<IProps, IState> {
  state: IState;
  constructor(props: IProps) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      content: '',
    }
  }
  handleClick = () => {
    this.setState({
      showModal: true
    });
  }

  handleModalChange = (val: boolean) => {
    this.setState({
      showModal: val
    });
  }

  handleTitleChange = (e: any) => {
    this.setState({
      title: e.target.value
    });
  }

  handleContentChange = (e: any) => {
    this.setState({
      content: e.target.value
    });
  }

  handleConfirm = () => {
    console.log('点击了确定按钮');
    let todoItem: ITodoItem = {
      id: 0,
      title: this.state.title,
      content: this.state.content,
      isDone: false
    };

    this.props.addTodo(todoItem);
  }
  
  render() {
    const {showModal} = this.state;
    return (
      <div className="operation-bar">
        <div className="btn" onClick={this.handleClick}>添加</div>
        <div className="btn">筛选</div>
        <Modal show={showModal as boolean} onChange={this.handleModalChange} title="添加Todo" onConfirm={this.handleConfirm}>
          <div className="form">
            <p>标题</p>
            <input type="text" onChange={this.handleTitleChange} />

            <p>内容</p>
            <input type="text" onChange={this.handleContentChange} />
          </div>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo(todoItem: ITodoItem) {
      dispatch({
        type: 'addTodo',
        value: todoItem
      })
    }
  }
}

export default connect(()=>{return {}}, mapDispatchToProps)(OperationBar);