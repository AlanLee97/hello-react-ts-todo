import React from "react";
import './style.scss';
import { ITodoItem } from "../../interfaces";

// export default function TodoItem(props: Props) {
//   return (
//     <div className="todo-item">
//       <div>{props.title}</div>
//     </div>
//   )
// }


interface IState {
  isChecked: boolean;
}

// 继承的组件后面需要加上泛型<Props>
export default class TodoItem extends React.Component<ITodoItem> {
  state: IState;
  constructor(props: ITodoItem) {
    super(props);
    this.state = {
      isChecked: false
    }
  }

  handleDoneChange = (e: any) => {
    console.log(e.target.checked);
    this.setState({
      isChecked: e.target.checked
    })
  }

  componentDidMount() {
    this.setState({
      isChecked: this.props.isDone
    });
  }

  render() {
    const {id, title, content} = this.props;
    const {isChecked} = this.state;
    
    return (
      <div className={`todo-item `}>
        <input type="checkbox" onChange={this.handleDoneChange} checked={isChecked}/>
        <div className={`content-box ${isChecked ? 'deleted' : ''}`}>
          <div className="id-box">{id}</div>
          <div className="item title">{title}</div>
          <div className="item content">{content}</div>
        </div>
      </div>
    )
  }
}