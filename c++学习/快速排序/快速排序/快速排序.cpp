// ��������.cpp : �������̨Ӧ�ó������ڵ㡣
//

#include "stdafx.h"
#include <iostream>
using namespace std;
class Solution{
public:
	//�������� ����Ҫ�������λ�ã�ĩλ��
	int * quick_sort(int* data,int start,int end)
	{
		//�õ��ݹ��˼��
		if (start>=end)//��ʾֻ��һ����
		{
			return data;
		}
		//  mid_value ��׼Ԫ��
		int mid_value = data[start];
		int low = start;//��λ�α�
		int high = end; //��λ�α�
		//����ѭ��
		while(low<high)
		{
		   //high���� �Ⱥž��ǽ��ͻ�׼һ����ķ�һ��
	       // ���low��highδ�غϣ�highָ���Ԫ�ز��Ȼ�׼Ԫ��С����high�����ƶ�
			while (low<high&&data[high]>=mid_value)
			{
				high--;			
			}
			// ��highָ���Ԫ�طŵ�low��λ����
			data[low] = data[high];			
			//���low��highδ�غϣ�lowָ���Ԫ�رȻ�׼Ԫ��С����low�����ƶ�
			while(low<high&&data[low]<mid_value)
			{
				low++;
			}
			// ��lowָ���Ԫ�طŵ�high��λ����
			data[high] = data[low];			
		}
		data[low] = mid_value;
		//�Ի�׼Ԫ����ߵ������н��п�������
		quick_sort(data,start,low-1);
		//�Ի�׼Ԫ���ұߵ������н��п�������
		quick_sort(data,low+1,end);
		return data;
	}

		
};

int main()
{
	int a[] ={0,-12,2,-9999,999,7,1,12,21,88,90,-80};
	Solution* mm = new Solution();
	mm->quick_sort(a,0,11);
	for (int i =0;i<=11;i++)
	{
		cout<<a[i]<<" ";
	}
	cout<<" "<<endl;
	system("pause");
	return 0;
}

