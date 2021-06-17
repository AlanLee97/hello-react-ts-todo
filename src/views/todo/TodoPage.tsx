import React from "react";
import OperationBar from '../../components/operation-bar/OperationBar';
import TodoItem from "../../components/todo-item/TodoItem";
import {ITodoItem} from '../../interfaces';

interface IState {
  todoList: Array<ITodoItem>;
}

const state: IState = {
  todoList: [
    {id: 1, title: '起床', content: '7:00 起床', isDone: true},
    {id: 2, title: '刷牙', content: '7:10 刷牙', isDone: false},
    {id: 3, title: '早餐', content: '7:40 吃早餐', isDone: false},
    {id: 4, title: '上班', content: '8:00 上班', isDone: false},
  ]
}

export default class TodoPage extends React.Component<ITodoItem, IState> {

  constructor(props: any) {
    super(props);
    this.state = state;
  }

  render() {
    const {todoList} = this.state;
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