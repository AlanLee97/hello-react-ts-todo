import React from "react";
import './style.scss';

// 操作栏
export default function OperationBar() {
  return (
    <div className="operation-bar">
      <div className="btn">添加</div>
      <div className="btn">筛选</div>
    </div>
  )
}