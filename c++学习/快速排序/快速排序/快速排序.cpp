// 快速排序.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include <iostream>
using namespace std;
class Solution{
public:
	//输入数组 数组要排序的首位置，末位置
	int * quick_sort(int* data,int start,int end)
	{
		//用到递归的思想
		if (start>=end)//表示只有一个数
		{
			return data;
		}
		//  mid_value 基准元素
		int mid_value = data[start];
		int low = start;//低位游标
		int high = end; //高位游标
		//交替循环
		while(low<high)
		{
		   //high左移 等号就是将和基准一样大的放一边
	       // 如果low与high未重合，high指向的元素不比基准元素小，则high向左移动
			while (low<high&&data[high]>=mid_value)
			{
				high--;			
			}
			// 将high指向的元素放到low的位置上
			data[low] = data[high];			
			//如果low与high未重合，low指向的元素比基准元素小，则low向右移动
			while(low<high&&data[low]<mid_value)
			{
				low++;
			}
			// 将low指向的元素放到high的位置上
			data[high] = data[low];			
		}
		data[low] = mid_value;
		//对基准元素左边的子序列进行快速排序
		quick_sort(data,start,low-1);
		//对基准元素右边的子序列进行快速排序
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

