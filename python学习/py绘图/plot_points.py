# import xlrd 
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import math as math
# import xlwt
df=pd.read_excel('points.xlsx')
# print(df)
x=df['px']
y=df['pz']
i =0
theta = pd.Series([None])
while(i<len(x)-1):
    theta[i] = math.atan((y[i+1]-y[i])/(x[i+1]-x[i]))
    i = i+1
#最后一位补齐
theta[i]=0
data = {
    'px':x,
    'theta':theta
}
frame = pd.DataFrame(data)
# print(frame)
# outputpath='hell_panda.xlsx'
frame.to_csv('先验轮廓倾角.txt',sep=',',index=False)

plt.rcParams['font.sans-serif'] = ['SimHei']  # 用来正常显示中文标签
plt.rcParams['axes.unicode_minus'] = False  # 用来正常显示负号
# plt.grid(linestyle = "--")      #设置背景网格线为虚线
fig, ax = plt.subplots(1, 1, figsize = (9, 6))
ax.set_xlabel('工件坐标系Px /mm', fontsize = 20)
ax.set_ylabel('轮廓倾角 /rad', fontsize = 20)
ax.tick_params(labelsize = 20)
ax.spines['top'].set_visible(False)  #去掉上边框
ax.spines['right'].set_visible(False) #去掉右边框
plt.plot(x,theta,label='轮廓倾角')
plt.title("工件坐标系Px方向先验轮廓倾角",fontsize=20,fontweight='bold')
plt.legend()
ax.legend(fontsize = 20)
plt.savefig('先验轮廓倾角.svg', dpi = 300)
plt.show()

