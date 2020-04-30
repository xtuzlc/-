load('px');load('fd');
load('kd022_fz');load('kd022_px');
load('PID085V015_px');load('PID085V015_fz');
ppx = px+79
ppx_pid = kd022_px+87
ppx_pid_pre=PID085V015_px+87
figure(1)
plot(ppx_pid,kd022_fz,'--*k');
hold on
plot(ppx,fd,'--k');
hold on
axis([0,170,-12,0]);
legend('����ʵ�ʽӴ��� Fn','���������Ӵ��� Fd','Location','northwest')
title('�������ٶ������Ļ�����������ٷ���Ӵ�������');
xlabel('px /mm')
ylabel('Fn /N')
figure(2)
plot(ppx_pid,kd022_fz,'linewidth',2);
hold on
plot(ppx_pid_pre,PID085V015_fz,'linewidth',2);
hold on
axis([0,170,-12,0]);
legend('�������ٶ�����','�������ٶ�����','Location','northwest')
title('�������ٶ������Ļ�����������ٷ���Ӵ�������');
xlabel('px /mm')
ylabel('Fn /N')

figure_FontSize=14;
set(get(gca,'XLabel'),'FontSize',figure_FontSize,'Vertical','top');
set(get(gca,'YLabel'),'FontSize',figure_FontSize,'Vertical','middle');
set(findobj('FontSize',10),'FontSize',figure_FontSize);
set(findobj(get(gca,'Children'),'LineWidth',0.5),'LineWidth',1);