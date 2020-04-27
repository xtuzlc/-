clear;
close all;
clc;
load('px.mat')
load('theta.mat')
  figure(1)
  plot(px,theta,'k');
   title('工件坐标系Px方向轮廓变化律');
 xlabel('px /mm  ');
 ylabel('ρ(px)');
 legend('曲面轮廓变化律');