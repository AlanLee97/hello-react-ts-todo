import React from "react";
import './style.scss';

interface IProps {
  title?: string;
  footer?: any;
  cancelText?: string;
  confirmText?: string;
  customMode?: boolean;
  show: boolean;
  onChange: (val: boolean) => void;
  onConfirm: () => void;
}

export default class Modal extends React.Component<IProps>{
  constructor(props: IProps) {
    super(props);
    this.state = {

    };
  }

  closeModal = () => {
    this.props.onChange(false);
  }

  handleClickContent = (e: any) => {
    e.stopPropagation();
  }

  handleConfirm = () => {
    // todo
    this.props.onConfirm();

    this.closeModal();
  }

  render() {
    const {children, title = '标题', cancelText = '取消', confirmText = '确定', customMode = false, show} = this.props;
    return (
      <div className={`modal ${show ? '' : 'hidden'}`} onClick={this.closeModal} >
        {
          customMode ? (
            <div className="content">
              <div>{children}</div>
            </div>
          ) : (
            <div className="content-wrapper" onClick={this.handleClickContent}>
              <div className="title">
                {title}
              </div>
              <div className="content">
                {children}
              </div>
              <div className="footer">
                <div className="btn" onClick={this.closeModal}>{cancelText}</div>
                <div className="btn confirmBtn" onClick={this.handleConfirm}>{confirmText}</div>
              </div>
            </div>
          )
        }

      </div>
    )
  }
}