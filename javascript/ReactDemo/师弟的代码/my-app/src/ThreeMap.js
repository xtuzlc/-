import './ThreeMap.css';
import React, { Component } from 'react';
import * as THREE from 'three';
import OBJLoader from './OBJLoader.js';
import OrbitControls from './OrbitControls.js';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
// import Checkbox from '@material-ui/core/Checkbox';
// import { width } from '@material-ui/system';
// import Stats from 'stats.js/src/Stats'
import axios from 'axios' ;
// import Highcharts from 'highcharts';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import {arr1} from './data.js'
import {arr2} from './data.js'
import {arr3} from './data.js'
import {arr4}from './data.js'
import {arr5} from './data.js'
import {arr6} from './data.js'
// import Input from '@material-ui/core/Input';




const style={
  position: 'absolute',
  left: 0,
  top: 0,
  borderRadius: '2%',
  border:'2px solid #d7dbde',
  width: '40%',
  height: '65%',
  marginLeft: '58.3%',
  marginTop: '125px',
  
}
const style1={
  position: 'absolute',
  left: 0,
  top: 0,
  borderRadius: '2%',
  border:'2px solid #d7dbde',
  width: '31%',
  height: '56%',
  marginLeft: '2%',
  marginTop: '125px',
}

// const paperstyle={
//     marginLeft: '50px',
//     marginTop: '20px',
//     width: '25%',
// }
// const paperstyle2={
//   marginRight: '0px',
//   marginTop: '0px',
//   width: '100%',
//   height: '80%',
// }
// const PrettoSlider ={
//   root: {
//     color: '#52af77',
//     height: 8,
//   },
//   thumb: {
//     height: 24,
//     width: 24,
//     backgroundColor: '#fff',
//     border: '2px solid currentColor',
//     marginTop: -8,
//     marginLeft: -12,
//     '&:focus,&:hover,&$active': {
//       boxShadow: 'inherit',
//     },
//   },
//   active: {},
//   valueLabel: {
//     left: 'calc(-50% + 4px)',
//   },
//   track: {
//     height: 8,
//     borderRadius: 4,
//   },
//   rail: {
//     height: 8,
//     borderRadius: 4,
//   },
// }
const paperstyle={
  root:{
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: '2%',
    border:'2px solid #d7dbde',
    width: '20%',
    marginLeft: '34%',
    marginTop: '125px',
  
},
p5:{
backgroundColor:'#FFFFcc'
}
}

// const paperstyle1={
//   root:{
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     borderRadius: '2%',
//     border:'2px solid #d7dbde',
//     width: '25%',
//     marginLeft: '2%',
//     marginTop: '550px',
  
// },
// p5:{
// backgroundColor:'#FFFFcc'
// }
// }

const paperstyle2={
root:{
  position: 'absolute',
  left: 0,
  top: 0,
  borderRadius: '2%',
  border:'2px solid #d7dbde',
  marginLeft: '58.3%',
  marginTop: '685px',
  width: '13.3%',
  backgroundColor:'#00FFFF',
  
},
p6:{
  
  lineHeight: '1px',
}

}

const paperstyle13={
  root:{
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: '2%',
    border:'2px solid #d7dbde',
    marginLeft: '71.6%',
    width: '13.3%',
    marginTop: '685px',
    backgroundColor:'#00FFFF',
    
  },
  p6:{
    
    lineHeight: '1px',
  }
  
  }
  const paperstyle14={
    root:{
      position: 'absolute',
      left: 0,
      top: 0,
      borderRadius: '2%',
      border:'2px solid #d7dbde',
      marginLeft: '84.95%',
      width: '13.3%',
      marginTop: '685px',
      backgroundColor:'#00FFFF',
      
    },
    p6:{
      
      lineHeight: '1px',
    }
    
    }

const paperstyle3={

  root:{
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: '2%',
    border:'2px solid #d7dbde',
    marginLeft: '64%',
    width:'34.3%',
    height:'5.5%',
    marginTop: '70px',
    backgroundColor:'#669933',

  },
  p1:{
    marginTop: '6px',
  },
 
}
//监测端
const paperstyle4={
  root:{
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: '2%',
    border:'2px solid #d7dbde',
    marginLeft: '58.3%',
    width:'5.5%',
    height:'5.5%',
    marginTop: '70px',
    backgroundColor:'#99CCFF',

  },
  p1:{
    marginTop: '6px',
  },
}
//控制端
const paperstyle5={

  root:{
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: '2%',
    border:'2px solid #d7dbde',
    marginLeft: '2%',
    width:'5.5%',
    height:'5.5%',
    marginTop: '70px',
    backgroundColor:'#99CCFF',

  }

}
const paperstyle6={
  position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: '2%',
    border:'2px solid #d7dbde',
    marginLeft: '7.7%',
    width:'46.3%',
    height:'5.5%',
    marginTop: '70px',
    backgroundColor:'#669933',
}

const paperstyle7={
 root:{ position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: '2%',
    border:'2px solid #d7dbde',
    marginLeft: '38.5%',
    width:'10%',
    height:'6.3%',
    marginTop: '495px',
    backgroundColor:'#CC6666',
},
p1:{
  marginTop: '8px',
}
}

const paperstyle17={
  root:{ position: 'absolute',
     left: 0,
     top: 0,
     borderRadius: '2%',
     border:'2px solid #d7dbde',
     marginLeft: '38.5%',
     width:'10%',
     height:'10%',
     marginTop: '700px',
     backgroundColor:'#CC6666',
 },
 p1:{
   marginTop: '8px',
 }
 }

const paperstyle8={
  root:{
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: '2%',
    border:'2px solid #d7dbde',
    width: '25%',
    height: '6%',
    marginLeft: '2%',
    marginTop: '625px',
  },
  p1:{
      marginTop: '3px',
    },

}
const paperstyle9={
  root:{
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: '2%',
    border:'2px solid #d7dbde',
    width: '3%',
    height: '6%',
    marginLeft: '27.5%',
    marginTop: '625px',
  },
  p1:{
      marginTop: '3px',
    }

}

const paperstyle10={
  root:{
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: '2%',
    border:'2px solid #d7dbde',
    width: '25%',
    height: '6%',
    marginLeft: '2%',
    marginTop: '700px',
  },
  p1:{
      marginTop: '3px',
    },

}
const paperstyle11={
  root:{
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: '2%',
    border:'2px solid #d7dbde',
    width: '3%',
    height: '6%',
    marginLeft: '27.5%',
    marginTop: '700px',
  },
  p1:{
      marginTop: '3px',
    }

}
const paperstyle12={
  root:{
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: '2%',
    border:'2px solid #d7dbde',
    width: '3%',
    height: '6%',
    marginLeft: '12.5%',
    marginTop: '770px',
  },
  p1:{
      marginTop: '3px',
    }

}



//定义3D模型
var objbase = new THREE.Object3D();
var objjoint1 = new THREE.Object3D();
var objjoint2 = new THREE.Object3D();
var objjoint3 = new THREE.Object3D();
var objjoint4 = new THREE.Object3D();
var objjoint5 = new THREE.Object3D();
var objjoint6 = new THREE.Object3D();
var objframe=new THREE.Object3D();

var cobjbase = new THREE.Object3D();
var cobjjoint1 = new THREE.Object3D();
var cobjjoint2 = new THREE.Object3D();
var cobjjoint3 = new THREE.Object3D();
var cobjjoint4 = new THREE.Object3D();
var cobjjoint5 = new THREE.Object3D();
var cobjjoint6 = new THREE.Object3D();
var cobjframe=new THREE.Object3D();



const useStyles = makeStyles(theme => ({
    root: {
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
    card: {
      minWidth: 275,
      width: 300,
    },
  }));
const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
];
function valuetext(value) {
  return `${value}°C`;
}

let timergetjoint = undefined;
let timergetsensor = undefined;
class ThreeMap extends Component{
 	componentDidMount(){
    // this.renderGraph();
    this.initThree();
    // this.forwardkinematic(0,0,90,0,45,0);
  }
  constructor(props) {
    super(props);
    this.state = {
      joint1: 0,
      joint2: 0,
      joint3: 90,
      joint4: 0,
      joint5: 45,
      joint6: 0,
      cjoint1: 0,
      cjoint2: 0,
      cjoint3: 90,
      cjoint4: 0,
      cjoint5: 45,
      cjoint6: 0,
      sensorFx:0,
      sensorFy:0,
      sensorFz:0,
      sensorTx:0,
      sensorTy:0,
      sensorTz:0,
      posx:545.71,
      posy:50,
      posz:354.29,   
      // visible: false,
      // activityName:'',
      // tabsvalue:0,
      
       
      
      // chart1title: 'joint1',//图表
      // chart2title: 'joint2',
      // chart3title: 'joint3',
      // chart4title: 'joint4',
      // chart5title: 'joint5',
      // chart6title: 'joint6',
    };
  }

  // renderGraph = () => {
  //   const _this=this;
  //   let Data1 = {
  //       chart: {
  //           type: 'spline',
  //           animation: {
  //             duration: 1,
  //             easing: 'easeOutBounce'
  //           }, // don't animate in old IE
  //           marginRight: 10,
  //           events: {
  //               load: function () {

  //                   // set up the updating of the chart each second
  //                   var series = this.series[0];
  //                   setInterval(function () {
  //                       var x = (new Date()).getTime(), // current time
  //                           y = _this.state.joint1;
  //                       series.addPoint([x, y], true, true);
  //                   }, 100);
  //               }
  //           }
  //       },
  //       title: false,
  //       time: {
  //           useUTC: false
  //       },
  //       xAxis: {
  //           type: 'datetime',
  //           tickPixelInterval: 150
  //       },
  //       yAxis: {
  //           title: {
  //               text: 'Value'
  //           },
  //           plotLines: [{
  //               value: 0,
  //               width: 1,
  //               color: '#808080'
  //           }]
  //       },
  //       tooltip: {
  //           headerFormat: '<b>{series.name}</b><br/>',
  //           pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  //       },
  //       legend: {
  //           enabled: false
  //       },
  //       exporting: {
  //           enabled: false
  //       },
  //       credits: {
  //         enabled:false
  //       },
  //       series: [{
  //           name: 'data',
  //           data: (function () {
  //               // generate an array of random data
  //               var data = [],
  //                   time = (new Date()).getTime(),
  //                   i;

  //               for (i = -59; i <= 0; i += 1) {
  //                   data.push({
  //                       x: time + i * 1000,
  //                       y: _this.state.joint1,
  //                   });
  //               }
  //               return data;
  //           }())
  //       }]
  //   }
  //   Highcharts.chart(this.refs.alarmHighChart1, Data1 ).setSize(300,300);
  //   let Data2 = {
  //     chart: {
  //         type: 'spline',
  //         animation: {
  //           duration: 1,
  //           easing: 'easeOutBounce'
  //         }, // don't animate in old IE
  //         marginRight: 10,
  //         events: {
  //             load: function () {

  //                 // set up the updating of the chart each second
  //                 var series = this.series[0];
  //                 setInterval(function () {
  //                     var x = (new Date()).getTime(), // current time
  //                         y = _this.state.joint2;
  //                     series.addPoint([x, y], true, true);
  //                 }, 100);
  //             }
  //         }
  //     },
  //     title: false,
  //     time: {
  //         useUTC: false
  //     },
  //     xAxis: {
  //         type: 'datetime',
  //         tickPixelInterval: 150
  //     },
  //     yAxis: {
  //         title: {
  //             text: 'Value'
  //         },
  //         plotLines: [{
  //             value: 0,
  //             width: 1,
  //             color: '#808080'
  //         }]
  //     },
  //     tooltip: {
  //         headerFormat: '<b>{series.name}</b><br/>',
  //         pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  //     },
  //     legend: {
  //         enabled: false
  //     },
  //     exporting: {
  //         enabled: false
  //     },
  //     credits: {
  //       enabled:false
  //     },
  //     series: [{
  //         name: 'data',
  //         data: (function () {
  //             // generate an array of random data
  //             var data = [],
  //                 time = (new Date()).getTime(),
  //                 i;

  //             for (i = -59; i <= 0; i += 1) {
  //                 data.push({
  //                     x: time + i * 1000,
  //                     y: _this.state.joint2,
  //                 });
  //             }
  //             return data;
  //         }())
  //     }]
  //   }
  //   Highcharts.chart(this.refs.alarmHighChart2, Data2 ).setSize(300,300);
  //   let Data3 = {
  //     chart: {
  //         type: 'spline',
  //         animation: {
  //           duration: 1,
  //           easing: 'easeOutBounce'
  //         }, // don't animate in old IE
  //         marginRight: 10,
  //         events: {
  //             load: function () {

  //                 // set up the updating of the chart each second
  //                 var series = this.series[0];
  //                 setInterval(function () {
  //                     var x = (new Date()).getTime(), // current time
  //                         y = _this.state.joint3;
  //                     series.addPoint([x, y], true, true);
  //                 }, 100);
  //             }
  //         }
  //     },
  //     title: false ,
  //     time: {
  //         useUTC: false
  //     },
  //     xAxis: {
  //         type: 'datetime',
  //         tickPixelInterval: 150
  //     },
  //     yAxis: {
  //         title: {
  //             text: 'Value'
  //         },
  //         plotLines: [{
  //             value: 0,
  //             width: 1,
  //             color: '#808080'
  //         }]
  //     },
  //     tooltip: {
  //         headerFormat: '<b>{series.name}</b><br/>',
  //         pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  //     },
  //     legend: {
  //         enabled: false
  //     },
  //     exporting: {
  //         enabled: false
  //     },
  //     credits: {
  //       enabled:false
  //     },
  //     series: [{
  //         name: 'data',
  //         data: (function () {
  //             // generate an array of random data
  //             var data = [],
  //                 time = (new Date()).getTime(),
  //                 i;

  //             for (i = -59; i <= 0; i += 1) {
  //                 data.push({
  //                     x: time + i * 1000,
  //                     y: _this.state.joint3,
  //                 });
  //             }
  //             return data;
  //         }())
  //     }]
  //   }
  //   Highcharts.chart(this.refs.alarmHighChart3, Data3 ).setSize(300,300);
  //   let Data4 = {
  //     chart: {
  //         type: 'spline',
  //         animation: {
  //           duration: 1,
  //           easing: 'easeOutBounce'
  //         }, // don't animate in old IE
  //         marginRight: 10,
  //         events: {
  //             load: function () {

  //                 // set up the updating of the chart each second
  //                 var series = this.series[0];
  //                 setInterval(function () {
  //                     var x = (new Date()).getTime(), // current time
  //                         y = _this.state.joint4;
  //                     series.addPoint([x, y], true, true);
  //                 }, 100);
  //             }
  //         }
  //     },
  //     title: false,
  //     time: {
  //         useUTC: false
  //     },
  //     xAxis: {
  //         type: 'datetime',
  //         tickPixelInterval: 150
  //     },
  //     yAxis: {
  //         title: {
  //             text: 'Value'
  //         },
  //         plotLines: [{
  //             value: 0,
  //             width: 1,
  //             color: '#808080'
  //         }]
  //     },
  //     tooltip: {
  //         headerFormat: '<b>{series.name}</b><br/>',
  //         pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  //     },
  //     legend: {
  //         enabled: false
  //     },
  //     exporting: {
  //         enabled: false
  //     },
  //     credits: {
  //       enabled:false
  //     },
  //     series: [{
  //         name: 'data',
  //         data: (function () {
  //             // generate an array of random data
  //             var data = [],
  //                 time = (new Date()).getTime(),
  //                 i;

  //             for (i = -59; i <= 0; i += 1) {
  //                 data.push({
  //                     x: time + i * 1000,
  //                     y: _this.state.joint4,
  //                 });
  //             }
  //             return data;
  //         }())
  //     }]
  //   }
  //   Highcharts.chart(this.refs.alarmHighChart4, Data4 ).setSize(300,300);
  //   let Data5 = {
  //     chart: {
  //         type: 'spline',
  //         animation: {
  //           duration: 1,
  //           easing: 'easeOutBounce'
  //         }, // don't animate in old IE
  //         marginRight: 10,
  //         events: {
  //             load: function () {

  //                 // set up the updating of the chart each second
  //                 var series = this.series[0];
  //                 setInterval(function () {
  //                     var x = (new Date()).getTime(), // current time
  //                         y = _this.state.joint5;
  //                     series.addPoint([x, y], true, true);
  //                 }, 100);
  //             }
  //         }
  //     },
  //     title: false,
  //     time: {
  //         useUTC: false
  //     },
  //     xAxis: {
  //         type: 'datetime',
  //         tickPixelInterval: 150
  //     },
  //     yAxis: {
  //         title: {
  //             text: 'Value'
  //         },
  //         plotLines: [{
  //             value: 0,
  //             width: 1,
  //             color: '#808080'
  //         }]
  //     },
  //     tooltip: {
  //         headerFormat: '<b>{series.name}</b><br/>',
  //         pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  //     },
  //     legend: {
  //         enabled: false
  //     },
  //     exporting: {
  //         enabled: false
  //     },
  //     credits: {
  //       enabled:false
  //     },
  //     series: [{
  //         name: 'data',
  //         data: (function () {
  //             // generate an array of random data
  //             var data = [],
  //                 time = (new Date()).getTime(),
  //                 i;

  //             for (i = -59; i <= 0; i += 1) {
  //                 data.push({
  //                     x: time + i * 1000,
  //                     y: _this.state.joint5,
  //                 });
  //             }
  //             return data;
  //         }())
  //     }]
  //   }
  //   Highcharts.chart(this.refs.alarmHighChart5, Data5 ).setSize(300,300);
  //   let Data6 = {
  //     chart: {
  //         type: 'spline',
  //         animation: {
  //           duration: 1,
  //           easing: 'easeOutBounce'
  //         }, // don't animate in old IE
  //         marginRight: 10,
  //         events: {
  //             load: function () {

  //                 // set up the updating of the chart each second
  //                 var series = this.series[0];
  //                 setInterval(function () {
  //                     var x = (new Date()).getTime(), // current time
  //                         y = _this.state.joint6;
  //                     series.addPoint([x, y], true, true);
  //                 }, 100);
  //             }
  //         }
  //     },
  //     title: false,
  //     time: {
  //         useUTC: false
  //     },
  //     xAxis: {
  //         type: 'datetime',
  //         tickPixelInterval: 150
  //     },
  //     yAxis: {
  //         title: {
  //             text: 'Value'
  //         },
  //         plotLines: [{
  //             value: 0,
  //             width: 1,
  //             color: '#808080'
  //         }]
  //     },
  //     tooltip: {
  //         headerFormat: '<b>{series.name}</b><br/>',
  //         pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  //     },
  //     legend: {
  //         enabled: false
  //     },
  //     credits: {
  //         enabled:false
  //     },
  //     exporting: {
  //         enabled: false
  //     },
  //     series: [{
  //         name: 'data',
  //         data: (function () {
  //             // generate an array of random data
  //             var data = [],
  //                 time = (new Date()).getTime(),
  //                 i;

  //             for (i = -59; i <= 0; i += 1) {
  //                 data.push({
  //                     x: time + i * 1000,
  //                     y: _this.state.joint6,
  //                 });
  //             }
  //             return data;
  //         }())
  //     }]
  //   }
  //   Highcharts.chart(this.refs.alarmHighChart6, Data6 ).setSize(300,300);
  //   }
  forwardkinematic = (j1,j2,j3,j4,j5,j6)=>{
    var angle1_radian=j1*Math.PI/180.0;
    var angle2_radian=(j2-90)*Math.PI/180.0;
    var angle3_radian=(j3+90)*Math.PI/180.0;
    var angle4_radian=j4*Math.PI/180.0;
    var angle5_radian=j5*Math.PI/180.0;
    var angle6_radian=j6*Math.PI/180.0;
    var a0 = 0;
    // var a0=240.25;
    var a1 = 50;
    var a2 = 425;
    var a3 = 0;
    var a4 = 0;
    var a5 = 0;
    
   

    var d1 = 0;
    var d2 = 0;
    var d3 = 50;
    var d4 = 425;
    var d5 = 0;
    var d6 = 100;
    var c1=Math.cos(angle1_radian);
    var c2=Math.cos(angle2_radian);
    var c3=Math.cos(angle3_radian);
    var c4=Math.cos(angle4_radian);
    var c5=Math.cos(angle5_radian);
    var c6=Math.cos(angle6_radian);

    var s1=Math.sin(angle1_radian);
    var s2=Math.sin(angle2_radian);
    var s3=Math.sin(angle3_radian);
    var s4=Math.sin(angle4_radian);
    var s5=Math.sin(angle5_radian);
    var s6=Math.sin(angle6_radian);

    var nx=-c6*(s5*(c1*c2*s3+c1*c3*s2)+c5*(s1*s4-c4*(c1*c2*c3-c1*s2*s3)))-s6*(c4*s1+s4*(c1*c2*c3- c1*s2*s3));
    var ny=s6*(c1*c4 - s4*(c2*c3*s1 - s1*s2*s3)) - c6*(s5*(c2*s1*s3 + c3*s1*s2) - c5*(c1*s4 + c4*(c2*c3*s1 - s1*s2*s3)));
    var nz= s4*s6*(c2*s3 + c3*s2) - c6*(s5*(c2*c3 - s2*s3) + c4*c5*(c2*s3 + c3*s2));

    var ox=s6*(s5*(c1*c2*s3 + c1*c3*s2) + c5*(s1*s4 - c4*(c1*c2*c3 - c1*s2*s3))) - c6*(c4*s1 + s4*(c1*c2*c3 - c1*s2*s3));
    var oy=s6*(s5*(c2*s1*s3 + c3*s1*s2) - c5*(c1*s4 + c4*(c2*c3*s1 - s1*s2*s3))) + c6*(c1*c4 - s4*(c2*c3*s1 - s1*s2*s3));
    var oz=s6*(s5*(c2*c3 - s2*s3) + c4*c5*(c2*s3 + c3*s2)) + c6*s4*(c2*s3 + c3*s2)

    var ax=c5*(c1*c2*s3 + c1*c3*s2) - s5*(s1*s4 - c4*(c1*c2*c3 - c1*s2*s3));
    var ay=c5*(c2*s1*s3 + c3*s1*s2) + s5*(c1*s4 + c4*(c2*c3*s1 - s1*s2*s3));
    var az=c5*(c2*c3 - s2*s3) - c4*s5*(c2*s3 + c3*s2);

    var px=50*c1 - 50*s1 + 425*c1*c2 + 100*c5*(c1*c2*s3 + c1*c3*s2) - 100*s5*(s1*s4 - c4*(c1*c2*c3 - c1*s2*s3)) + 425*c1*c2*s3 + 425*c1*c3*s2;
    var py=50*c1 + 50*s1 + 425*c2*s1 + 100*c5*(c2*s1*s3 + c3*s1*s2) + 100*s5*(c1*s4 + c4*(c2*c3*s1 - s1*s2*s3)) + 425*c2*s1*s3 + 425*c3*s1*s2;
    var pz=425*c2*c3 - 425*s2 - 425*s2*s3 + 100*c5*(c2*c3 - s2*s3) - 100*c4*s5*(c2*s3 + c3*s2);

    this.setState({posx : px});
    this.setState({posy : py});
    this.setState({posz : pz});
  }
  handleSliderChange1 = (event, newValue) => {
    // console.log(newValue);
    cobjjoint1.rotateY(Math.PI*(newValue-this.state.cjoint1)/180);
    this.setState({cjoint1 : newValue});
    
  }
  handleInputChange1 = event => {
    // console.log(event.target.value);
    cobjjoint1.rotateY(Math.PI*(event.target.value-this.state.cjoint1)/180);
    this.setState({cjoint1 : event.target.value});
  };
  

  handleBlur1 = (event) => {
    if (event.target.value<-180) {
     this.setState({cjoint1:-180});
    } else if (event.target.value > 180) {
      this.setState({cjoint1:180});
    }
  };


  handleSliderChange2 = (event, newValue) => {
    // console.log(newValue);
    cobjjoint2.rotateZ(-Math.PI*(newValue-this.state.cjoint2)/180);
    this.setState({cjoint2:newValue});
  }
  handleInputChange2 = event => {
    // console.log(event.target.value);
    cobjjoint2.rotateZ(-Math.PI*(event.target.value-this.state.cjoint2)/180);
    this.setState({cjoint2 : event.target.value});
  };
  

  handleBlur2 = (event) => {
    if (event.target.value<-130) {
     this.setState({cjoint2:-130});
    } else if (event.target.value > 148) {
      this.setState({cjoint2:148});
    }
  };
  handleSliderChange3 = (event, newValue) => {
    // console.log(newValue);
    cobjjoint3.rotateZ(-Math.PI*(newValue-this.state.cjoint3)/180);
    this.setState({cjoint3:newValue});
  }
  handleInputChange3 = event => {
    // console.log(event.target.value);
    cobjjoint3.rotateZ(-Math.PI*(event.target.value-this.state.cjoint3)/180);
    this.setState({cjoint3 : event.target.value});
  };
  handleBlur3 = (event) => {
    if (event.target.value<-145) {
     this.setState({cjoint3:-145});
    } else if (event.target.value > 145) {
      this.setState({cjoint3:145});
    }
  };


  handleSliderChange4 = (event, newValue) => {
    // console.log(newValue);
    cobjjoint4.rotateY(Math.PI*(newValue-this.state.cjoint4)/180);
   this.setState({cjoint4:newValue});
  }
  handleInputChange4 = event => {
    // console.log(event.target.value);
    cobjjoint4.rotateY(Math.PI*(event.target.value-this.state.cjoint4)/180);
    this.setState({cjoint4 : event.target.value});
  };
  handleBlur4 = (event) => {
    if (event.target.value<-270) {
     this.setState({cjoint4:-270});
    } else if (event.target.value > 270) {
      this.setState({cjoint4:270});
    }
  };


  handleSliderChange5 = (event, newValue) => {
    // console.log(newValue);
    cobjjoint5.rotateZ(-Math.PI*(newValue-this.state.cjoint5)/180);
    this.setState({cjoint5:newValue});
  }
  handleInputChange5 = event => {
    // console.log(event.target.value);
    cobjjoint5.rotateZ(-Math.PI*(event.target.value-this.state.cjoint5)/180);
    this.setState({cjoint5 : event.target.value});
  };
  handleBlur5 = (event) => {
    if (event.target.value<-115) {
     this.setState({cjoint5:-115});
    } else if (event.target.value > 140) {
      this.setState({cjoint5:140});
    }
  };

  handleSliderChange6 = (event, newValue) => {
    // console.log(newValue);
    cobjjoint6.rotateY(Math.PI*(newValue-this.state.cjoint6)/180);
   this.setState({cjoint6:newValue});
  }
  handleInputChange6 = event => {
    // console.log(event.target.value);
    cobjjoint6.rotateY(Math.PI*(event.target.value-this.state.cjoint6)/180);
    this.setState({cjoint6 : event.target.value});
  };
  handleBlur6 = (event) => {
    if (event.target.value<-270) {
     this.setState({cjoint6:-270});
    } else if (event.target.value > 270) {
      this.setState({cjoint6:270});
    }
  };





  
  handleButtonFuwei = event => {
    
    this.setState({cjoint1:0});
    this.setState({cjoint2:0});
    this.setState({cjoint3:90});
    this.setState({cjoint4:0});
    this.setState({cjoint5:45});
    this.setState({cjoint6:0});
    
    cobjjoint1.rotateY(Math.PI*(0-this.state.cjoint1)/180);
    cobjjoint2.rotateZ(-Math.PI*(0-this.state.cjoint2)/180);
    cobjjoint3.rotateZ(-Math.PI*(90-this.state.cjoint3)/180);
    cobjjoint4.rotateY(Math.PI*(0-this.state.cjoint4)/180);
    cobjjoint5.rotateZ(-Math.PI*(45-this.state.cjoint5)/180);
    cobjjoint6.rotateY(Math.PI*(0-this.state.cjoint6)/180);
   
    
  }
  setjoint = (joint1,joint2,joint3,joint4,joint5,joint6) => {
    objjoint1.rotateY(Math.PI*(joint1-this.state.joint1)/180);
    objjoint2.rotateZ(Math.PI*(-joint2+this.state.joint2)/180);
    objjoint3.rotateZ(Math.PI*(-joint3+this.state.joint3)/180);
    objjoint4.rotateY(Math.PI*(joint4-this.state.joint4)/180);
    objjoint5.rotateZ(Math.PI*(-joint5+this.state.joint5)/180);
    objjoint6.rotateY(Math.PI*(joint6-this.state.joint6)/180);
    this.setState({joint1:joint1,joint2:joint2,joint3:joint3,joint4:joint4,joint5:joint5,joint6:joint6});
    // this.forwardkinematic(this.state.joint1,this.state.joint2,this.state.joint3,this.state.joint4,this.state.joint5,this.state.joint6);
    this.forwardkinematic(joint1,joint2,joint3,joint4,joint5,joint6);
  }

  setsensor=(fx,fy,fz,tx,ty,tz)=>{
    this.setState({sensorFx:fx,sensorFy:fy,sensorFz:fz,sensorTx:tx,sensorTy:ty,sensor:tz});
  }

  timerStart = () => {
    
    timergetjoint = setInterval(() =>this.sendgetjoint() , 10);

    
  }
  timerStartsensor=()=>{
    timergetsensor=setInterval(() => this.sendgetsrnsor(), 10);

  }
  timerStop = () => {
    clearTimeout(timergetjoint);
    clearTimeout(timergetsensor);
    this.setState({joint1 : 0});
    this.setState({joint2 : 0});
    this.setState({joint3 : 90});
    this.setState({joint4 : 0});
    this.setState({joint5 : 45});
    this.setState({joint6 : 0});
    this.setState({posx : 545.71});
    this.setState({posy : 50});
    this.setState({posz : 354.29});
    objjoint1.rotateY(Math.PI*(0-this.state.joint1)/180);
    objjoint2.rotateZ(Math.PI*(0+this.state.joint2)/180);
    objjoint3.rotateZ(Math.PI*(-90+this.state.joint3)/180);
    objjoint4.rotateY(Math.PI*(0-this.state.joint4)/180);
    objjoint5.rotateZ(Math.PI*(-45+this.state.joint5)/180);
    objjoint6.rotateY(Math.PI*(0-this.state.joint6)/180);
   
  }

   timerStopData=()=>
  {
    let url="http://127.0.0.1:8000/stopdatajoint?cjoint1="+0+"&cjoint2="+0+"&cjoint3="+90+"&cjoint4="+0+"&cjoint5="+45+"&cjoint6="+0;
    console.log(url);
    axios.get(url)
            .then(function(response){
              // alert('发送成功');
      
            })
            .catch(function(error){
              alert('发送失败');
            }); 
  }
  sendMovejoint=()=>{

    let  url="http://127.0.0.1:8000/movejoint?cjoint1="+this.state.cjoint1+"&cjoint2="+this.state.cjoint2+"&cjoint3="+this.state.cjoint3+"&cjoint4="+this.state.cjoint4+"&cjoint5="+this.state.cjoint5+"&cjoint6="+this.state.cjoint6;
    console.log(url);
    axios.get(url)
            .then(function(response){
              // alert('发送成功');
      
            })
            .catch(function(error){
              alert('发送失败');
            }); 
  }
     
  sendDatajoint=()=>{
    var myCode1=new Array(10,20,30,50,60,100);
    var myCode2=new Array(5,30,40,55,60,120);
    var myCode3=new Array(20,25,30,50,80,125);
    var myCode4=new Array(9,28,33,55,80,105);
    var myCode5=new Array(18,25,30,70,90,135);
    var myCode6=new Array(14,23,35,58,89,117);
    
    for(let i=0;i<myCode1.length;i++){
  
        (function(){
         setTimeout(()=>{
            let url="http://127.0.0.1:8000/datajoint?cjoint1="+myCode1[i]+"&cjoint2="+myCode2[i]+"&cjoint3="+myCode3[i]+"&cjoint4="+myCode4[i]+"&cjoint5="+myCode5[i]+"&cjoint6="+myCode6[i];


            console.log(url);
            axios.get(url)
            .then(function(response){
              // alert('发送成功');
      
            })
            .catch(function(error){
              alert('发送失败');
            }); 
        },3000*i)
        })()
        }
    }
  

  sendData1joint=()=>{
    
     for(let i=0;i<6;i++){
        (function(){
          setTimeout(()=>{
            let url="http://127.0.0.1:8000/sendjoint?cjoint1="+arr1[i]+"&cjoint2="+arr2[i]+"&cjoint3="+arr3[i]+"&cjoint4="+arr4[i]+"&cjoint5="+arr5[i]+"&cjoint6="+arr6[i];
            console.log(url);
            axios.get(url)
            .then(function(response){
              // alert('发送成功');
      
            })
            .catch(function(error){
              alert('发送失败');
            }); 
        },3000*i)
        })()
        }
  }

  sendgetjoint = () => {
    // let  url="http://127.0.0.1:8000/login?joint1=0&joint2=123456"
    let  url="http://127.0.0.1:8000/getjoint"
    const _this=this; //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
    axios.get(url)
      .then(function (response) {
        let data =response.data;
        // console.log(data);//分割数组，就可以显示出来。
        var a = data.split(";");
        _this.setjoint(parseFloat(a[0]),parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3]),parseFloat(a[4]),parseFloat(a[5]));
        // this.forwardkinematic(this.state.joint1,this.state.joint2,this.state.joint3,this.state.joint4,this.state.joint5,this.state.joint6);
        console.log(a);
      })
      .catch(function (error) {
        alert('连接服务器失败');
        _this.timerStop();
      });
  }
  sendgetsrnsor=()=>{
    let url="http://127.0.0.1:8000/getsensor"
    const _this=this;
    axios.get(url)
      .then(function(response){
        let data=response.data;
        // console.log(data);
        var a=data.split(";");
        _this.setsensor(parseFloat(a[0]),parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3]),parseFloat(a[4]),parseFloat(a[5]));
        console.log(a);

      })
      .catch(function(error){
        alert('连接服务器失败');
        _this.timerStop();
      });

  }
  handleButtonLogin = () =>{
    let  url="http://127.0.0.1:8000/login"
    axios.get(url)
      .then(function (response) {
        let data =response.data;
        alert(data);
      })
      .catch(function (error) {
        alert('连接服务器失败');
      });
  }

  handleRobotic=()=>{
    let url="http://127.0.0.1:8000/robotsolution"
    axios.get(url)
      .then(function(response)
      {
        // let data=response.data;
        // alert(data);
      })
      .catch(function(error){
        alert("连接服务器失败");
      });

  }
  handleinverserRobotic=()=>{
    let url="http://127.0.0.1:8000/robotinversolution"
    axios.get(url)
      .then(function(response)
      {
        // let data=response.data;
        // alert(data);
      })
      .catch(function(error){
        alert("连接服务器失败");
      });

  }
  // handleTabsChange = (event, newValue) =>{
  //   this.setState({tabsvalue:newValue});
  //   switch (newValue) {
  //     case 0:
  //         this.setState({
  //           chart1title:'joint1',
  //           chart2title:'joint2',
  //           chart3title:'joint3',
  //           chart4title:'joint4',
  //           chart5title:'joint5',
  //           chart6title:'joint6'
  //           })
  //       break;
  //     case 1:
  //         this.setState({
  //           chart1title:'forcex',
  //           chart2title:'forcey',
  //           chart3title:'forcez',
  //           chart4title:'forcerx',
  //           chart5title:'forcery',
  //           chart6title:'forcerz'
  //           })
  //       break;
  //     default:
  //         this.setState({
  //           chart1title:'joint1',
  //           chart2title:'joint2',
  //           chart3title:'joint3',
  //           chart4title:'joint4',
  //           chart5title:'joint5',
  //           chart6title:'joint6'
  //           })
  //       break;
  //   }
  //   console.log(this.state.chart1title);
  // }
  



  
	initThree(){

    let camera1, scene1, renderer1;
		let canvas1 = document.getElementById('canvas1');
        let width1 = canvas1.clientWidth;
        let height1 = canvas1.clientHeight;
    let camera2,scene2,renderer2;
    let canvas2=document.getElementById('canvas2');
        let width2=canvas2.clientWidth;
        let height2=canvas2.clientHeight;
    //帧
    // var stats = new Stats();
    // stats.showPanel( 0 );
    // document.body.appendChild( stats.dom );
		init();
    // animate();
	function init() {
  
  renderer1 = new THREE.WebGLRenderer({ canvas: canvas1 });
  renderer1.setSize(width1, height1);
  scene1 = new THREE.Scene();
  camera1 = new THREE.OrthographicCamera(-100, 100, 62, -62, 1, 1000);
  camera1.position.set(300, 300, 300);
  camera1.up.x = 0;//相机以哪个方向为上方
  camera1.up.y = 0;
  camera1.up.z = 1;
  camera1.lookAt(0, 0, 0)//相机看向哪个坐标,(0,0,0)是原点
  //这里可以修改背景颜色
  renderer1.setClearColor(0x666666);
  //这里实现是否可以控制object的位置、旋转
  var controls = new OrbitControls(camera1, renderer1.domElement);
  var light1= new THREE.DirectionalLight(0xf8d366, 0.5);
  light1.position.setScalar(100);
  scene1.add(light1);
  scene1.add(new THREE.AmbientLight(0xf8d366, 0.5));
  // var objLoaderframe = new OBJLoader();
  // objLoaderframe.load('frame.obj', function (object) {
  //     scene1.add(new THREE.AxesHelper(40));
  //     object.scale.set(0.05, 0.05, 0.05);
  //     object.rotateX(Math.PI * 0.5);
  //     objframe=object;
  //     scene1.add(objframe);
      // var objLoaderFrame=new OBJLoader();
      // objLoaderFrame.load('frame.obj', function (object) {
      // //辅助工具,x,y,z三维坐标轴
      // // var  = new THREE.Object3D();
      // scene1.add(new THREE.AxesHelper(40));
      // //将模型缩小0.06倍
      // object.scale.set(0.04, 0.04, 0.04);
      // // object.position.set(0, 0, -25);
      
      // object.rotateX(Math.PI * 0.5);
      // object.rotateY(Math.PI * 0.5);
     
      // objframe = object;
      // scene1.add(objframe);
      var objLoaderframe = new OBJLoader();
      objLoaderframe.load('frame.obj', function (object) {
      //辅助工具,x,y,z三维坐标轴
      // var  = new THREE.Object3D();
      scene1.add(new THREE.AxesHelper(40));
      //将模型缩小0.06倍
      object.scale.set(0.03, 0.03, 0.03);
      object.position.set(0,0,-19);
      object.rotateZ(Math.PI*0.5);
      
      // object.rotateX(Math.PI * 1);
      object.rotateX(Math.PI * 0.5);
      objframe = object;
      scene1.add(objframe);
    
      });
      var objLoaderBase = new OBJLoader();
      objLoaderBase.load('base.obj', function (object) {
      //辅助工具,x,y,z三维坐标轴
      // var  = new THREE.Object3D();
      scene1.add(new THREE.AxesHelper(40));
      //将模型缩小0.06倍
      
      object.scale.set(0.03, 0.03, 0.03);
      object.rotateX(Math.PI * 1.5);
      // object.rotateY(Math.PI * 0.5);
     
      
      objbase = object;
      scene1.add(objbase);
      var objLoaderJoint1 = new OBJLoader();
      objLoaderJoint1.load('joint1.obj', function (object) {
        object.position.set(0, 245.25, 0);
        objjoint1 = object;
        objbase.add(objjoint1);
            var objLoaderJoint2 = new OBJLoader();
            objLoaderJoint2.load('joint2.obj', function (object) {
              object.position.set(50, 232.75, -161);
              objjoint2 = object;
              objjoint1.add(objjoint2);
              var objLoaderJoint3 = new OBJLoader();
              objLoaderJoint3.load('joint3.obj', function (object) {
                object.position.set(0, 425, 0);
                object.rotateZ(-Math.PI * 90/180);
                objjoint3 = object;
                objjoint2.add(objjoint3);
                var objLoaderJoint4 = new OBJLoader();
                objLoaderJoint4.load('joint4.obj', function (object) {
                  object.position.set(0, 157, 111);
                  objjoint4 = object;
                  objjoint3.add(objjoint4);
                  var objLoaderJoint5 = new OBJLoader();
                  objLoaderJoint5.load('joint5.obj', function (object) {
                    object.position.set(0, 269, 0);
                    object.rotateZ(-Math.PI * 45/180);
                    objjoint5 = object;
                    objjoint4.add(objjoint5);
                    var objLoaderJoint6 = new OBJLoader();
                    objLoaderJoint6.load('joint6.obj', function (object) {
                      object.position.set(0, 89.5, 0);
                      objjoint6 = object;
                      objjoint5.add(objjoint6);
                      
                     
                  });
                });
              });
            });
          });
        });
  });
// });

  controls.update();

  function animate1() {
      requestAnimationFrame(animate1);
      controls.update();
      renderer1.render(scene1, camera1);
      // objjoint1.rotation.y+=0.01;
      
  }
  animate1();







  renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 });
  renderer2.setSize(width2, height2);
  scene2 = new THREE.Scene();
  camera2 = new THREE.OrthographicCamera(-100, 100, 62, -62, 1, 1000);
  camera2.position.set(300, 300, 300);
  camera2.up.x = 0;//相机以哪个方向为上方
  camera2.up.y = 0;
  camera2.up.z = 1;
  camera2.lookAt(0, 0, 0)//相机看向哪个坐标,(0,0,0)是原点
  //这里可以修改背景颜色
  renderer2.setClearColor(0x3399CC);
  //这里实现是否可以控制object的位置、旋转
  var controls = new OrbitControls(camera2, renderer2.domElement);
  var light2= new THREE.DirectionalLight(0xf8d366, 0.5);
  light2.position.setScalar(100);
  scene2.add(light2);
  scene2.add(new THREE.AmbientLight(0xf8d366, 0.5));
  // 加载OBJ格式的模型
  var cobjLoaderframe = new OBJLoader();
      cobjLoaderframe.load('framework.obj', function (object) {
      //辅助工具,x,y,z三维坐标轴
      // var  = new THREE.Object3D();
      scene2.add(new THREE.AxesHelper(40));
      //将模型缩小0.06倍
      object.scale.set(0.03, 0.03, 0.03);
      object.position.set(0,0,-19);
      object.rotateZ(Math.PI*0.5);
      
      // object.rotateX(Math.PI * 1);
      object.rotateX(Math.PI * 0.5);
      cobjframe = object;
      scene2.add(cobjframe);
      });
      var cobjLoaderBase = new OBJLoader();
      cobjLoaderBase.load('$base.obj', function (object) {
      //辅助工具,x,y,z三维坐标轴
      // var  = new THREE.Object3D();
      scene2.add(new THREE.AxesHelper(40));
      //将模型缩小0.06倍
      
      object.scale.set(0.03, 0.03, 0.03);
      object.rotateX(Math.PI * 1.5);
      // object.rotateY(Math.PI * 0.5);
      
      cobjbase = object;
      scene2.add(cobjbase);
      var cobjLoaderJoint1 = new OBJLoader();
      cobjLoaderJoint1.load('$joint1.obj', function (object) {
        object.position.set(0, 245.25, 0);
        cobjjoint1 = object;
        cobjbase.add(cobjjoint1);
            var cobjLoaderJoint2 = new OBJLoader();
            cobjLoaderJoint2.load('$joint2.obj', function (object) {
              object.position.set(50, 232.75, -161);
              cobjjoint2 = object;
              cobjjoint1.add(cobjjoint2);
              var cobjLoaderJoint3 = new OBJLoader();
              cobjLoaderJoint3.load('$joint3.obj', function (object) {
                object.position.set(0, 425, 0);
                object.rotateZ(-Math.PI * 90/180);
                cobjjoint3 = object;
                cobjjoint2.add(cobjjoint3);
                var cobjLoaderJoint4 = new OBJLoader();
                cobjLoaderJoint4.load('$joint4.obj', function (object) {
                  object.position.set(0, 157, 111);
                  cobjjoint4 = object;
                  cobjjoint3.add(cobjjoint4);
                  var cobjLoaderJoint5 = new OBJLoader();
                  cobjLoaderJoint5.load('$joint5.obj', function (object) {
                    object.position.set(0, 269, 0);
                    object.rotateZ(-Math.PI * 45/180);
                    cobjjoint5 = object;
                    cobjjoint4.add(cobjjoint5);
                    var cobjLoaderJoint6 = new OBJLoader();
                    cobjLoaderJoint6.load('$joint6.obj', function (object) {
                      object.position.set(0, 89.5, 0);
                      cobjjoint6 = object;
                      cobjjoint5.add(cobjjoint6);
                      
                     
                  });
                });
              });
            });
          });
        });
  });

  controls.update();

  function animate2() {
      requestAnimationFrame(animate2);
      controls.update();
      renderer2.render(scene2, camera2);
      
      
  }
  animate2();
  


   }
  }
  

	render(){

		return (
      
          //   <div >
          //     <AppBar position="static" style ={{height:'80%'}}>
          //       <Toolbar>
          //         <Typography variant="h6" >
          //           ———Staubli tx90仿真平台
          //         </Typography>
          //       </Toolbar>
          //     </AppBar>

          //       <Grid container spacing={2} alignItems="center">
          //       <Grid item xs>

          //   <Paper style={paperstyle}>
          //   <canvas id='canvas1' style={style}>
          //       </canvas>
          //   <div >
          //   <Button variant="contained" color="primary" onClick={this.handleButtonFuwei}>
          //   复位
          //   </Button>
          //   <Button variant="contained" color="primary" onClick={this.handleButtonLogin}>
          //   Login
          //   </Button>
          //   <Button variant="contained" color="primary" onClick={this.timerStart}>
          //   同步
          //   </Button>
          //   <Button variant="contained" color="primary" onClick={this.timerStop}>
          //   停止同步
          //   </Button>
          //   <Grid container spacing={2} alignItems="center">
          //       <Grid item xs>
          //       <Typography gutterBottom>
          //         joint1
          //       </Typography>
          //       <Slider
          //         defaultValue={0}
          //         getAriaValueText={valuetext}
          //         aria-labelledby="continuous-slider"
          //         valueLabelDisplay="auto"
          //         step={0.01}
          //         value={this.state.joint1}
          //         min={-180}
          //         max={180}
          //         onChange={this.handle1}
          //       />
          //       </Grid>
          //       <Grid item>
          //         <Input
          //           style={{
          //             width:'50px',
          //           }}
          //           value={this.state.joint1}
          //         />
          //       </Grid>
          //   </Grid>
          //   <Grid container spacing={2} alignItems="center">
          //       <Grid item xs>
          //       <Typography gutterBottom>
          //         joint2
          //       </Typography>
          //       <Slider
          //         defaultValue={0}
          //         getAriaValueText={valuetext}
          //         aria-labelledby="continuous-slider"
          //         valueLabelDisplay="auto"
          //         step={0.01}
          //         value={this.state.joint2}
          //         min={-130}
          //         max={148}
          //         onChange={this.handle2}
          //       />
          //       </Grid>
          //       <Grid item>
          //         <Input
          //           style={{
          //             width:'50px',
          //           }}
          //           value={this.state.joint2}
          //         />
          //       </Grid>
          //   </Grid>
          //   <Grid container spacing={2} alignItems="center">
          //       <Grid item xs>
          //       <Typography gutterBottom>
          //         joint3
          //       </Typography>
          //       <Slider
          //         defaultValue={0}
          //         getAriaValueText={valuetext}
          //         aria-labelledby="continuous-slider"
          //         valueLabelDisplay="auto"
          //         step={0.01}
          //         value={this.state.joint3}
          //         min={-145}
          //         max={145}
          //         onChange={this.handle3}
          //       />
          //       </Grid>
          //       <Grid item>
          //         <Input
          //           style={{
          //             width:'50px',
          //           }}
          //           value={this.state.joint3}
          //         />
          //       </Grid>
          //   </Grid>
          //   <Grid container spacing={2} alignItems="center">
          //       <Grid item xs>
          //       <Typography gutterBottom>
          //         joint4
          //       </Typography>
          //       <Slider
          //         defaultValue={0}
          //         getAriaValueText={valuetext}
          //         aria-labelledby="continuous-slider"
          //         valueLabelDisplay="auto"
          //         step={0.01}
          //         value={this.state.joint4}
          //         min={-270}
          //         max={270}
          //         onChange={this.handle4}
          //       />
          //       </Grid>
          //       <Grid item>
          //         <Input
          //           style={{
          //             width:'50px',
          //           }}
          //           value={this.state.joint4}
          //         />
          //       </Grid>
          //   </Grid>
          //   <Grid container spacing={2} alignItems="center">
          //       <Grid item xs>
          //       <Typography gutterBottom>
          //         joint5
          //       </Typography>
          //       <Slider
          //         defaultValue={0}
          //         getAriaValueText={valuetext}
          //         aria-labelledby="continuous-slider"
          //         valueLabelDisplay="auto"
          //         step={0.01}
          //         value={this.state.joint5}
          //         min={-115}
          //         max={140}
          //         onChange={this.handle5}
          //       />
          //       </Grid>
          //       <Grid item>
          //         <Input
          //           style={{
          //             width:'50px',
          //           }}
          //           value={this.state.joint5}
          //         />
          //       </Grid>
          //   </Grid>
          //   <Grid container spacing={2} alignItems="center">
          //       <Grid item xs>
          //       <Typography gutterBottom>
          //         joint6
          //       </Typography>
          //       <Slider
          //         defaultValue={0}
          //         getAriaValueText={valuetext}
          //         aria-labelledby="continuous-slider"
          //         valueLabelDisplay="auto"
          //         step={0.01}
          //         value={this.state.joint6}
          //         min={-270}
          //         max={270}
          //         onChange={this.handle6}
          //       />
          //       </Grid>
          //       <Grid item>
          //         <Input
          //           style={{
          //             width:'50px',
          //           }}
          //           value={this.state.joint6}
          //         />
          //       </Grid>
          //   </Grid>
          //   <Grid container spacing={2} alignItems="center">
          //       <Grid item>
          //       <Typography gutterBottom>
          //         PX:
          //       </Typography>
          //       </Grid>
          //       <Grid item>
          //         <Input
          //           style={{
          //             width:'50px',
          //           }}
          //           value={this.state.posx}
          //         />
          //       </Grid>
          //       <Grid item>
          //       <Typography gutterBottom>
          //         PY:
          //       </Typography>
          //       </Grid>
          //       <Grid item>
          //         <Input
          //           style={{
          //             width:'50px',
          //           }}
          //           value={this.state.posy}
          //         />
          //       </Grid>
          //       <Grid item>
          //       <Typography gutterBottom>
          //         PZ:
          //       </Typography>
          //       </Grid>
          //       <Grid item>
          //         <Input
          //           style={{
          //             width:'50px',
          //           }}
          //           value={this.state.posz}
          //         />
          //       </Grid>

          //   </Grid>

          // </div>
          // </Paper>
          // <AppBar
          //   position="static"
          //   style={{width : '80%' ,marginTop: '20px',}}
          // >
          //   <Tabs value={this.state.tabsvalue} onChange={this.handleTabsChange} aria-label="simple tabs example">
          //     <Tab label="Joint"  />
          //     <Tab label="Force Sensor"  />
          //   </Tabs>
          // </AppBar>
          // </Grid>
          //   <Paper style={paperstyle2}>
          //   <Grid container spacing={0} alignItems="center" >
          //       <Grid item>
          //       <div ref="alarmHighChart1" style={ {width : '100%' , height :'20%'}}/>
          //       <Typography variant="subtitle1" component="h2">
          //         {this.state.chart1title}
          //       </Typography>
          //       </Grid>
          //       <Grid item>
          //       <div ref="alarmHighChart2" style={ {width : '100%' , height :'20%'}}/>
          //       <Typography variant="subtitle1" component="h2">
          //         {this.state.chart2title}
          //       </Typography>
          //       </Grid>
          //       <Grid item>
          //       <div ref="alarmHighChart3" style={ {width : '100%' , height :'20%'}}/>
          //       <Typography variant="subtitle1" component="h2">
          //         {this.state.chart3title}
          //       </Typography>
          //       </Grid>
          //       <Grid item>
          //       <div ref="alarmHighChart4" style={ {width : '100%' , height :'20%'}}/>
          //       <Typography variant="subtitle1" component="h2">
          //         {this.state.chart4title}
          //       </Typography>
          //       </Grid>
          //       <Grid item>
          //       <div ref="alarmHighChart5" style={ {width : '100%' , height :'20%'}}/>
          //       <Typography variant="subtitle1" component="h2">
          //         {this.state.chart5title}
          //       </Typography>
          //       </Grid>
          //       <Grid item>
          //       <div ref="alarmHighChart6" style={ {width : '100%' , height :'20%'}}/>
          //       <Typography variant="subtitle1" component="h2">
          //         {this.state.chart6title}
          //       </Typography>
          //       </Grid>
          //   </Grid>
          //   </Paper>

          // </Grid>

          // </div>
          <div >
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h5" >
                    工业机器人双向运动控制与监测的数字孪生平台
                    {/* Staubli tx90机器人局域网监测仿真平台设计 */}
                  </Typography>
                </Toolbar>
              </AppBar>
           
            <canvas id='canvas1' style={style}>
              
            </canvas>
            <Paper style={paperstyle2.root}>
            
            <form >
              <b>关节角</b>
              <div style={paperstyle2.p6}>
              <b>joint1 : <input type="text" size="5"  value={this.state.joint1} ></input></b>
              </div>
              <div style={paperstyle2.p6}>
             <b>joint2 : <input type="text" size="5"  value={this.state.joint2} ></input></b>
            </div>
            <div style={paperstyle2.p6}>
             <b> joint3 : <input type="text" size="5"  value={this.state.joint3} ></input></b>
              </div>
              <div style={paperstyle2.p6}>
             <b> joint4 : <input type="text" size="5"  value={this.state.joint4} ></input></b>
              </div>
              <div style={paperstyle2.p6}>
              <b>joint5 : <input type="text" size="5"  value={this.state.joint5} ></input></b>
              </div> 
              <div style={paperstyle2.p6}>
              <b>joint6 : <input type="text" size="5"  value={this.state.joint6} ></input></b>
              </div>

            </form>
            
          </Paper>
          <Paper style={paperstyle13.root}>
          
            <form >
              <b>力传感器</b>
              <div style={paperstyle13.p6}>
              <b>sensorFx : <input type="text" size="5"  value={this.state.sensorFx} ></input></b>
              </div>
              <div style={paperstyle13.p6}>
             <b>sensorFy : <input type="text" size="5"  value={this.state.sensorFy} ></input></b>
            </div>
            <div style={paperstyle13.p6}>
             <b> sensorFz : <input type="text" size="5"  value={this.state.sensorFz} ></input></b>
              </div>
              <div style={paperstyle13.p6}>
             <b> sensorTx : <input type="text" size="5"  value={this.state.sensorTx} ></input></b>
              </div>
              <div style={paperstyle13.p6}>
              <b>sensorTy : <input type="text" size="5"  value={this.state.sensorTy} ></input></b>
              </div> 
              <div style={paperstyle13.p6}>
              <b>sensorTz : <input type="text" size="5"  value={this.state.sensorTz} ></input></b>
              </div>
              
            </form>
            
          </Paper>

          <Paper style={paperstyle14.root}>
          
          {/* <Grid container spacing={2} alignItems="center">
                 <Grid item>
                 <Typography gutterBottom>
                  Px:
                 </Typography>
                 </Grid>
                <Grid item>
                 <Input
                    style={{
                      width:'50px',
                    }}
                    value={this.state.posx}
                  />
                </Grid>
                <Grid item>
                <Typography gutterBottom>
                  Py:
                </Typography>
                </Grid>
                <Grid item>
                  <Input
                    style={{
                      width:'50px',
                    }}
                    value={this.state.posy}
                  />
                </Grid>
                <Grid item>
                <Typography gutterBottom>
                  Pz:
                </Typography>
                </Grid>
                <Grid item>
                  <Input
                    style={{
                      width:'50px',
                    }}
                    value={this.state.posz}
                  />
                </Grid>

            </Grid> */}
            <form >
              <b>机器人末端位置</b>
              <div style={paperstyle14.p6}>
              <b>Px : <input type="text" size="5"  value={this.state.posx} ></input></b>
              </div>
              <div style={paperstyle14.p6}>
             <b>Py : <input type="text" size="5"  value={this.state.posy} ></input></b>
            </div>
            <div style={paperstyle14.p6}>
             <b> Pz : <input type="text" size="5"  value={this.state.posz} ></input></b>
              </div>
            </form>

          </Paper>
           
           
           <Paper style={paperstyle3.root}>  
            

           <div style={paperstyle3.p1}>
           
             <Button variant="contained" color="primary" onClick={this.handleButtonLogin}>
             连接服务器
            </Button>
            <Button variant="contained" color="primary" onClick={this.timerStart}>
             机器人仿真
            </Button>
            <Button variant="contained" color="primary" onClick={this.timerStartsensor}>
             力传感器
            </Button>
            <Button variant="contained" color="primary" onClick={this.timerStop}>
            断开服务器
            </Button>
            </div>
           </Paper>

          <Paper style={paperstyle4.root}>
          <div style={paperstyle4.p1}>
         <b>  <p>监测端</p></b>
         
           </div>
          </Paper>
            <Paper  style={paperstyle5.root}>

            <b><p>控制端</p></b>
            </Paper>
             <Paper style={paperstyle6}></Paper>

            <Paper style={paperstyle7.root}>
              <div style={paperstyle7.p1}>
            <Button variant="contained" color="primary" onClick={this.handleButtonFuwei}>
             复位
             </Button>
             <Button variant="contained" color="primary" onClick={this.sendMovejoint}>
             发送
             </Button>
             
            </div>
            </Paper>
            
            <Paper style={paperstyle17.root}>
              <div style={paperstyle17.p1}>
            <Button variant="contained" color="primary" onClick={this.handleRobotic}>
             机器人正解计算
             </Button>
             <Button variant="contained" color="primary" onClick={this.handleinverserRobotic}>
             机器人逆解运算
             </Button>
             
            </div>
            </Paper>

            <Paper style={paperstyle8.root}>
            <div style={paperstyle8.p1}>
            <ExpansionPanel>
              <ExpansionPanelSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
            >
              <Typography >程序 1</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <Typography>
            <table>
              <tr>
                <td>joint1:</td>
                <td>10,20,30,50,60,100</td>
              </tr>
              <tr>
                <td>joint2:</td>
                <td>5,30,40,55,60,120</td>
              </tr>
              <tr>
                <td>joint3:</td>
                <td>20,25,30,50,80,125</td>
              </tr>
              <tr>
                <td>joint4:</td>
                <td>9,28,33,55,80,105</td>
              </tr>
              <tr>
                <td>joint5:</td>
                <td>18,25,30,70,90,135</td>
              </tr>
              <tr>
                <td>joint6:</td>
                <td>14,23,35,58,89,117</td>
              </tr>
            </table>
            </Typography>
          </ExpansionPanelDetails>
          </ExpansionPanel>
            </div>
              
            </Paper>
            <Paper style={paperstyle10.root}>
            <div style={paperstyle10.p1}>
            <ExpansionPanel>
              <ExpansionPanelSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
            >
              <Typography >程序 2</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <Typography>
            <table>
              <tr>
                <td>joint1:</td>
                <td>8,20,30,50,40,10</td>
              </tr>
              <tr>
                <td>joint2:</td>
                <td>4,18,30,80,50,38</td>
              </tr>
              <tr>
                <td>joint3:</td>
                <td>10,30,50,88,30,8</td>
              </tr>
              <tr>
                <td>joint4:</td>
                <td>13,18,30,60,44,38</td>
              </tr>
              <tr>
                <td>joint5:</td>
                <td>4,18,33,89,70,48.4,20.7</td>
              </tr>
              <tr>
                <td>joint6:</td>
                <td>20.5,25.7,39.7,67.7,50.3,48.4</td>
              </tr>
            </table>
            </Typography>
          </ExpansionPanelDetails>
          </ExpansionPanel>
            </div>
              
            </Paper>
          
          <div style={paperstyle9.root}>
            
              <Button variant="contained" color="primary" onClick={this.sendDatajoint} style={{ 
                                  width:'70px',height:'50px'
                                }}>
             SEND
             </Button>
             
           
          </div>
          <div style={paperstyle11.root}>
            
              <Button variant="contained" color="primary" onClick={this.sendData1joint} style={{ 
                                  width:'70px',height:'50px'
                                }}>
             SEND1
             </Button>
           
          </div>
          <div style={paperstyle12.root}>
            
              <Button variant="contained" color="primary" onClick={this.timerStopData} style={{ 
                                  width:'70px',height:'50px'
                                }}>
             INIT
             </Button>
           
          </div>
            
          
            <canvas id='canvas2' style={style1}>
             
            </canvas>
          
            <Paper style={paperstyle.root}>
            <div className="App" style={paperstyle.p5}>
            
                            <Typography id="input-slider"   gutterBottom>
                               joint1
                            </Typography>
                            <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                            <Slider 
                              defaultValue={0}
                              getAriaValueText={valuetext}
                              aria-labelledby="continuous-slider"
                              valueLabelDisplay="auto"
                              step={0.01}
                              value={this.state.cjoint1}
                              min={-180}
                              max={180}
                              onChange={this.handleSliderChange1}
                            />
                            </Grid> 
                            
                             <Grid item>
                              <Input  
                                 style={{ 
                                  width:'65px',
                                }}
                                margin="dense"
                                onChange={this.handleInputChange1}
                                onBlur={this.handleBlur1}
                                inputProps={{
                                  step: 1,
                                  min: -180,
                                  max: 180,
                                  type: 'number',
                                  'aria-labelledby': 'input-slider',
                                }}
                                value={this.state.cjoint1}
                            />
                            </Grid> 
                             </Grid>
                       
                      
             
                        <Typography gutterBottom>
                            joint2
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                        <Slider
                          defaultValue={0}
                          getAriaValueText={valuetext}
                          aria-labelledby="continuous-slider"
                          valueLabelDisplay="auto"
                          step={0.01}
                          value={this.state.cjoint2}
                          // marks
                          min={-130}
                          max={148}
                          onChange={this.handleSliderChange2}
                        />
                        </Grid>
                            
                            <Grid item>
                            <Input 
                            style={{ 
                                  width:'65px',
                                }}
                                margin="dense"
                                onChange={this.handleInputChange2}
                                onBlur={this.handleBlur2}
                                inputProps={{
                                  step: 1,
                                  min: -130,
                                  max: 148,
                                  type: 'number',
                                  'aria-labelledby': 'input-slider',
                                }}
                                value={this.state.cjoint2}
                            />
                            </Grid>
                            </Grid>
            
                        <Typography gutterBottom>
                            joint3
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                        <Slider
                          defaultValue={90}
                          getAriaValueText={valuetext}
                          aria-labelledby="continuous-slider"
                          valueLabelDisplay="auto"
                          step={0.01}
                          value={this.state.cjoint3}
                          // marks
                          min={-145}
                          max={145}
                          onChange={this.handleSliderChange3}
                        />
                        </Grid>
                            
                            <Grid item>
                            <Input 
                            style={{ 
                                  width:'65px',
                                }}
                                margin="dense"
                                onChange={this.handleInputChange3}
                                onBlur={this.handleBlur3}
                                inputProps={{
                                  step: 1,
                                  min: -145,
                                  max: 145,
                                  type: 'number',
                                  'aria-labelledby': 'input-slider',
                                }}
                                value={this.state.cjoint3}
                            />
                            </Grid>
                            </Grid>
            
                        <Typography gutterBottom>
                            joint4
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                        <Slider
                          defaultValue={0}
                          getAriaValueText={valuetext}
                          aria-labelledby="continuous-slider"
                          valueLabelDisplay="auto"
                          step={0.01}
                          value={this.state.cjoint4}
                          // marks
                          min={-270}
                          max={270}
                          onChange={this.handleSliderChange4}
                        />
                        </Grid>
                            
                            <Grid item>
                            <Input 
                            style={{ 
                                  width:'65px',
                                }}
                                margin="dense"
                                onChange={this.handleInputChange4}
                                onBlur={this.handleBlur4}
                                inputProps={{
                                  step: 1,
                                  min: -270,
                                  max: 270,
                                  type: 'number',
                                  'aria-labelledby': 'input-slider',
                                }}
                                value={this.state.cjoint4}
                            />
                            </Grid>
                            </Grid>
            
                        <Typography gutterBottom>
                            joint5
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                        <Slider
                          defaultValue={45}
                          getAriaValueText={valuetext}
                          aria-labelledby="continuous-slider"
                          valueLabelDisplay="auto"
                          step={0.01}
                          value={this.state.cjoint5}
                          // marks
                          min={-115}
                          max={140}
                          onChange={this.handleSliderChange5}
                        />
                        </Grid>
                            
                            <Grid item>
                            <Input 
                            style={{ 
                                  width:'65px',
                                }}
                                margin="dense"
                                onChange={this.handleInputChange5}
                                onBlur={this.handleBlur5}
                                inputProps={{
                                  step:1,
                                  min: -115,
                                  max: 140,
                                  type: 'number',
                                  'aria-labelledby': 'input-slider',
                                }}
                                value={this.state.cjoint5}
                            />
                            </Grid>
                            </Grid>
            
                        <Typography gutterBottom>
                            joint6
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                        <Slider
                          defaultValue={0}
                          getAriaValueText={valuetext}
                          aria-labelledby="continuous-slider"
                          valueLabelDisplay="auto"
                          step={0.01}
                          value={this.state.cjoint6}
                          // marks
                          min={-270}
                          max={270}
                          onChange={this.handleSliderChange6}
                        />
                        </Grid>
                            
                            <Grid item>
                            <Input 
                            style={{ 
                                  width:'65px',
                                }}
                                margin="dense"
                                onChange={this.handleInputChange6}
                                onBlur={this.handleBlur6}
                                inputProps={{
                                  step: 1,
                                  min: -270,
                                  max: 270,
                                  type: 'number',
                                  'aria-labelledby': 'input-slider',
                                }}
                                value={this.state.cjoint6}
                            />
                            </Grid>
                            
                            </Grid> 
                
                            </div>        
                            
                </Paper>
                
            </div>
            
            
        );
	}
}

export default ThreeMap;
