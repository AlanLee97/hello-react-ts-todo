import React from "react";
import { connect } from "react-redux";
import OperationBar from '../../components/operation-bar/OperationBar';
import TodoItem from "../../components/todo-item/TodoItem";
import {ITodoItem} from '../../interfaces';

interface IProps {
  todoList: Array<ITodoItem>;
}

class TodoPage extends React.Component<IProps> {

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const {todoList} = this.props;
    return (
      <div>
        <OperationBar></OperationBar>
        {
          todoList.map((item, index) => {
            return (
              <TodoItem key={index} id={item.id} title={item.title} content={item.content} isDone={item.isDone}></TodoItem>
            )
          })
        }
      </div>
    )
  }

}

const mapStateToProps = (state: any) => {
  return {
    todoList: state.todoList
  }
}

export default connect(mapStateToProps)(TodoPage);