clear;
close all;
clc;
load('px.mat')
load('theta.mat')
  figure(1)
  plot(px,theta,'k');
   title('��������ϵPx���������仯��');
 xlabel('px /mm  ');
 ylabel('��(px)');
 legend('���������仯��');