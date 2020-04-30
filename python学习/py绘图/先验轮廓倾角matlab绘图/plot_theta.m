clear;
close all;
clc;
load('px.mat')
load('theta.mat')
figure(1)
plot(px,theta,'k');
title('��������ϵXp���������������');
xlabel('px /mm  ');
ylabel('�� /rad');
legend('�����������','Location','northwest');
axis([0,170,-0.4,0.5]);
figure_FontSize=14;
set(get(gca,'XLabel'),'FontSize',figure_FontSize,'Vertical','top');
set(get(gca,'YLabel'),'FontSize',figure_FontSize,'Vertical','middle');
set(findobj('FontSize',10),'FontSize',figure_FontSize);
set(findobj(get(gca,'Children'),'LineWidth',0.5),'LineWidth',1);