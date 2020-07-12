import flask
from flask import request  # 获取参数
from flask_cors import CORS
from ctypes import *
import _thread
import time
import math
import socket 
import os
import webbrowser as web

# import SOL_SOCKET,SO_REUSEADDR




server = flask.Flask(__name__)  # 创建一个flask对象
CORS(server, supports_credentials=True)


socketflag = 0
socke2_flage=1
if(socke2_flage == 1):
    sockfd = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
    # sockfd.bind(('192.168.0.100',1000)) #实物机器人连接
    sockfd.bind(('localhost',1000)) #虚拟机器人连接
    sockfd.listen(5)
    socke2_flage = 0


# conn,addr = sockfd.accept() 
# print(conn,addr)
# msg = '{1,'+joint1+','+joint2+','+joint3+','+joint4+','+joint5+','+joint6+','+'1}'
# conn.send(msg.encode('utf-8'))
# conn.close()

@server.route('/movejoint', methods=['get', 'post'])
def movejoint():
    joint1= request.values.get('cjoint1')  # 获取参数
    joint2= request.values.get('cjoint2')
    joint3= request.values.get('cjoint3')
    joint4= request.values.get('cjoint4')
    joint5= request.values.get('cjoint5')
    joint6= request.values.get('cjoint6')

    # joint1 = "90"
    # joint2 = "0"
    # joint3 = "0"
    # joint4 = "0"
    # joint5 = "0"
    # joint6 = "0"
    
    global socketflag,sockfd
    if(socketflag == 0):
        sockfd = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
        # sockfd.bind(('192.168.0.100',1000)) #实物机器人绑定
        sockfd.bind(('localhost',1000))#虚拟机器人
        sockfd.listen(5)
        socketflag = 1 
    conn,addr = sockfd.accept() 
    print(conn,addr)
    msg = '{1,'+joint1+','+joint2+','+joint3+','+joint4+','+joint5+','+joint6+','+'1}'
    conn.send(msg.encode('utf-8'))
    conn.close()
    print(msg)
    # sockfd.close()


    return '发送成功'
# sockfd = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
# sockfd.bind(('localhost',1000)) #绑定要监听的端口
# sockfd.listen(5)

# lib = cdll.LoadLibrary('E:/Documents/Visual Studio 2010/Projects/adddll/adddll/OMD.dll')
@server.route('/stopdatajoint', methods=['get', 'post'])
def stopdatajoint():
    joint1= request.values.get('cjoint1')  # 获取参数
    joint2= request.values.get('cjoint2')
    joint3= request.values.get('cjoint3')
    joint4= request.values.get('cjoint4')
    joint5= request.values.get('cjoint5')
    joint6= request.values.get('cjoint6')

    # joint1 = "90"
    # joint2 = "0"
    # joint3 = "0"
    # joint4 = "0"
    # joint5 = "0"
    # joint6 = "0"
    global socketflag,sockfd
    if(socketflag == 0):
        sockfd = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
        # sockfd.bind(('192.168.0.100',1000)) #绑定实物机器人
        sockfd.bind(('localhost',1000))
        sockfd.listen(5)
        socketflag = 1 
    conn,addr = sockfd.accept() 
    print(conn,addr)
    msg = '{1,'+joint1+','+joint2+','+joint3+','+joint4+','+joint5+','+joint6+','+'1}'
    conn.send(msg.encode('utf-8'))
    conn.close()
    print(msg)
    # sockfd.close()


    return '发送成功'


@server.route('/datajoint', methods=['get', 'post'])
def datajoint():
    joint1= request.values.get('cjoint1')  # 获取参数
    joint2= request.values.get('cjoint2')
    joint3= request.values.get('cjoint3')
    joint4= request.values.get('cjoint4')
    joint5= request.values.get('cjoint5')
    joint6= request.values.get('cjoint6')

    # joint1 = "90"
    # joint2 = "0"
    # joint3 = "0"
    # joint4 = "0"
    # joint5 = "0"
    # joint6 = "0"
    global socketflag,sockfd
    if(socketflag == 0):
        sockfd = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
        # sockfd.bind(('192.168.0.100',1000)) #绑定要监听的端口
        sockfd.bind(('localhost',1000))
        sockfd.listen(5)
        socketflag = 1 
    conn,addr = sockfd.accept() 
    print(conn,addr)
    msg = '{1,'+joint1+','+joint2+','+joint3+','+joint4+','+joint5+','+joint6+','+'1}'
    conn.send(msg.encode('utf-8'))
    conn.close()
    print(msg)
    # sockfd.close()


    return '发送成功'


@server.route('/sendjoint', methods=['get', 'post'])
def sendjoint():
    joint1= request.values.get('cjoint1')  # 获取参数
    joint2= request.values.get('cjoint2')
    joint3= request.values.get('cjoint3')
    joint4= request.values.get('cjoint4')
    joint5= request.values.get('cjoint5')
    joint6= request.values.get('cjoint6')

    # joint1 = "90"
    # joint2 = "0"
    # joint3 = "0"
    # joint4 = "0"
    # joint5 = "0"
    # joint6 = "0"
    global socketflag,sockfd
    if(socketflag == 0):
        sockfd = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
        # sockfd.bind(('192.168.0.100',1000)) #绑定要监听的端口
        sockfd.bind(('localhost',1000))
        sockfd.listen(5)
        socketflag = 1 
    conn,addr = sockfd.accept() 
    print(conn,addr)
    msg = '{1,'+joint1+','+joint2+','+joint3+','+joint4+','+joint5+','+joint6+','+'1}'
    conn.send(msg.encode('utf-8'))
    conn.close()
    print(msg)
    # sockfd.close()


    return '发送成功'

@server.route('/robotsolution', methods=['get', 'post'])
def robotsolution():
    # lib.init()
    # lib.login()
    web.open_new_tab('file:///D:/forwardBuild/my-app/src/robotsolution.html')
    return "进入机器人正解"


@server.route('/robotinversolution', methods=['get', 'post'])
def robotinversolution():
    # lib.init()
    # lib.login()
    web.open_new_tab('file:///D:/forwardBuild/my-app/src/robotinversesolution.html')
    return "进入机器人逆解"



lib = cdll.LoadLibrary('D:/zhang11/adddll/x64/Debug/adddll.dll')

@server.route('/login', methods=['get', 'post'])
def dlllogin():
    # lib.init()
    # lib.login()
    
    return '已连接服务器'
    

@server.route('/getjoint', methods=['get', 'post'])
def getjoint():
    lib.getjoint()
    fun1 = lib.getjoint1value
    fun1.restype = c_double  # 定义返回值类型
    joint1 = fun1(c_double(0))

    fun2 = lib.getjoint2value
    fun2.restype = c_double  # 定义返回值类型
    joint2 = fun2(c_double(0))

    fun3 = lib.getjoint3value
    fun3.restype = c_double  # 定义返回值类型
    joint3 = fun3(c_double(0))

    fun4 = lib.getjoint4value
    fun4.restype = c_double  # 定义返回值类型
    joint4 = fun4(c_double(0))

    fun5 = lib.getjoint5value
    fun5.restype = c_double  # 定义返回值类型
    joint5 = fun5(c_double(0))

    fun6 = lib.getjoint6value
    fun6.restype = c_double  # 定义返回值类型
    joint6 = fun6(c_double(0))
    joint = {'joint1': 0, 'joint2': 0, 'joint3': 0, 'joint4': 0, 'joint5': 0, 'joint6': 0}
    joint['joint1'] = round(joint1*180/math.pi,4)
    joint['joint2'] = round(joint2*180/math.pi,4)
    joint['joint3'] = round(joint3*180/math.pi,4)
    joint['joint4'] = round(joint4*180/math.pi,4)
    joint['joint5'] = round(joint5*180/math.pi,4)
    joint['joint6'] = round(joint6*180/math.pi,4)

    print(joint)
    return str(joint['joint1'])+';'+str(joint['joint2'])+';'+str(joint['joint3'])+';'+str(joint['joint4'])+';'+str(joint['joint5'])+';'+str(joint['joint6'])

@server.route('/getsensor', methods=['get', 'post'])
def getsensordata():
    lib.getsensordata()
    funfx = lib.getsensorfx
    funfx.restype = c_double  # 定义返回值类型
    sensorfx = funfx(c_double(0))

    funfy = lib.getsensorfy
    funfy.restype = c_double  # 定义返回值类型
    sensorfy = funfy(c_double(0))

    funfz = lib.getsensorfz
    funfz.restype = c_double  # 定义返回值类型
    sensorfz = funfz(c_double(0))

    funtx = lib.getsensortx
    funtx.restype = c_double  # 定义返回值类型
    sensortx = funtx(c_double(0))

    funty = lib.getsensorty
    funty.restype = c_double  # 定义返回值类型
    sensorty = funty(c_double(0))

    funtz = lib.getsensortz
    funtz.restype = c_double  # 定义返回值类型
    sensortz = funtz(c_double(0))

    sensordata = {'Fx': 0, 'Fy': 0, 'Fz': 0, 'Tx': 0, 'Ty': 0, 'Tz': 0}
    sensordata['Fx'] = sensorfx
    sensordata['Fy'] = sensorfy
    sensordata['Fz'] = sensorfz
    sensordata['Tx'] = sensortx
    sensordata['Ty'] = sensorty
    sensordata['Tz'] = sensortz
    print(sensordata)
    return str(sensordata['Fx'])+';'+str(sensordata['Fy'])+';'+str(sensordata['Fz'])+';'+str(sensordata['Tx'])+';'+str(sensordata['Ty'])+';'+str(sensordata['Tz'])



server.run(host="0.0.0.0",port=8000,debug=True)
# sockfd.close()
# dlllogin()
# getjoint()
# getsensordata()
# movejoint()
