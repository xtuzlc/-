// 组件拆分
import React, { Component } from 'react';
class Xiaojiejieitem extends Component {
  
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <div onClick={this.handleClick}>
                {this.props.context}
            </div>
            
         );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}
 
export default Xiaojiejieitem;