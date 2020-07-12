import React from 'react'
import ReactDOM from 'react-dom'
//引入了一个APP组件，目前这个组件还是没有的，需要一会建立
import App from './App'
import Zlc_ard from './Card'
//然后用React的语法把APP模块渲染到了root ID上面.这个rootID是在public\index.html文件中的
// ReactDOM.render(<App />,document.getElementById('root'))
ReactDOM.render(<Zlc_ard />,document.getElementById('root'))