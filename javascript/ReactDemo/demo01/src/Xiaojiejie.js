import React, { Fragment } from 'react'
import Xiaojiejieitem from './XiaojiejieItem'
const Component = React.Component
//Fragment
class Xiaojiejie extends Component{
    //构造函数
    constructor(props){
        //
        super(props)
        this.state = {
            //定义变量 这是数据
            inputvalue:'zlc',
            list:['aaa','bbb'],
            number1:'0',
            number2:'0',
            sum:'0',

        }

    }
    render(){        
        return(
            //React不建议你直接操作DOM元素,而是要通过数据进行驱动，改变界面中的效果。
            //React会根据数据的变化，自动的帮助你完成界面的改变。
            //所以在写React代码时，你无需关注DOM相关的操作，只需要关注数据的操作就可以了
            <Fragment>
            <div>
                <input value={this.state.number1} onChange={this.inputChange_num1.bind(this)}/>
                +
                <input value={this.state.number2} onChange = {this.inputChange_num2.bind(this)}/>
                =
                <input value={this.state.sum} />
            </div>
            <button onClick={this.add2.bind(this)}>计算</button>
            <div>
             {/* 数据绑定：value={this.state.inputvalue} */}
             {/* input 是输入框 */}
             {/* 事件绑定  onChange={this.inputChange}*/}
             {/* bind 绑定this */}
                <input value={this.state.inputvalue} onChange={this.inputChange.bind(this)}/>
                <button onClick={this.addList.bind(this)}> 增加服务 </button>
            </div>
            <ul>
                {/* <li>头部按摩</li>
                <li>精油推背</li> */}
                {
                    //map循环键值映射 
                    // 点中删除效果
                    this.state.list.map((item,index)=>{
                    // 此处是绑定了deleteItem.bind(this,index),类似于python
                    return(
                        <div>
                            <Xiaojiejieitem 
                            // {/* 父组件向子组件传递内容，靠属性的形式传递 */}
                            // {/* 要删除就要知道索引值，还是需要通过父组件传递给子组件
                            //     .这里还是通过props属性的形式进行传递 */}
                                context = {item}
                                key={index+item}
                                index = {index}
                                //传方法去子组件，子组件调用父子件的方法操作父子件
                                deleteItem={this.deleteItem.bind(this)}

                            />
                        </div>
                    )

                 
                    }
                    )
                }
            </ul>
            </Fragment>
        )    
    }
    //自己写的事件响应函数
    inputChange(e){
        console.log(e.target.value)
        // 这个是错误的
        // this.state.inputvalue = e.target.value
        //固定写法
        this.setState({
            inputvalue: e.target.value
        })
    }
    inputChange_num1(e){
        console.log(e.target.value)
        // 这个是错误的
        // this.state.inputvalue = e.target.value
        //固定写法
        this.setState({
            number1: e.target.value
        })
    }
    inputChange_num2(e){
        console.log(e.target.value)
        // 这个是错误的
        // this.state.inputvalue = e.target.value
        //固定写法
        this.setState({
            number2: e.target.value
        })
    }
    // inputChange_sum(e){
    //     console.log(e.target.value)
    //     // 这个是错误的
    //     // this.state.inputvalue = e.target.value
    //     //固定写法
    //     this.setState({
    //         sum: e.target.value
    //     })
    // }
    //增加列表
    addList(){
        this.setState({
           list:[...this.state.list,this.state.inputvalue],
           inputvalue:'' 
        })
    }
    deleteItem(e){
        //打印出下标，因为前面绑定的是下标
        console.log(e)
        //先声明一个局部变量
        //然后利用传递过来的下标,删除数组中的值.删除后用setState更新数据就可以了.
        let list_temp = this.state.list
        list_temp.splice(e,1)
        this.setState({
            list:list_temp
        })

    }
    add2(){
        var a = parseFloat(this.state.number1)
        var b = parseFloat(this.state.number2)
        var c = a+b        
        this.setState({
            
            sum:c
        })
    }

}
export default Xiaojiejie
 