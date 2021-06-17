import React from "react";
import './style.scss';

interface IState {
  _show: boolean;
}

interface IProps {
  title?: string;
  footer?: any;
  cancelText?: string;
  confirmText?: string;
  customMode?: boolean;
  show: boolean;
}

export default class Modal extends React.Component<IProps, IState>{
  state: IState;
  constructor(props: IProps) {
    super(props);
    this.state = {
      _show: this.props.show
    }
  }

  handleClick = () => {
    this.setState({
      _show: false
    })
    
  }
  
  

  render() {
    const {_show} = this.state;
    const {children, title = '标题', cancelText = '取消', confirmText = '确定', customMode = false} = this.props;
    return (
      <div className={`modal ${_show ? '' : 'hidden'}`} onClick={this.handleClick} >
        {
          customMode ? (
            <div className="content">
              {children}
            </div>
          ) : (
            <div>
              <div className="title">
                {title}
              </div>
              <div className="content">
                {children}
              </div>
            </div>
          )
        }

      </div>
    )
  }
}