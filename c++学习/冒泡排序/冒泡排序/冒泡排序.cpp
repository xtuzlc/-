// 冒泡排序.cpp : 定义控制台应用程序的入口点。

//排序算法稳定性：
//稳定排序算法会让原本有相等键值的纪录维持相对次序。
//假设以下的数对将要以他们的第一个数字来排序：(4, 1)  (3, 1)  (3, 7)（5, 6）
//可能产生两种不同的结果，一个是让相等键值的纪录维持相对的次序，而另外一个则没有
//(3, 1)  (3, 7)  (4, 1)  (5, 6)  （维持次序） 
//(3, 7)  (3, 1)  (4, 1)  (5, 6)  （次序被改变）
//冒泡排序原理：比较两个相邻的元素，将值大的元素交换至右端。（稳定的）
//选择排序:首先在未排序序列中找到最小/最大元素，存放到排序序列的起始位置，
//然后，再从剩余未排序元素中继续寻找最小/最大元素，然后放到已排序序列的末尾。
//以此类推，直到所有元素均排序完毕。 (不稳定)（考虑升序每次选择最大的情况放后面）
//插入排序：直接插入排序基本思想：当插入第i（i>1）个元素时，
//前面的data[0],data[1]……data[i-1]已经排好序。这时用data[i]的排序码与data[i-1],data[i-2],……的排序码顺序进行比较，
//找到插入位置即将data[i]插入，原来位置上的元素向后顺序移动。

//希尔排序：
#include "stdafx.h"
#include <iostream>
#include <vector>
using namespace std;
class solution{
public:
	//数组本身就是顺序表
	//冒泡排序这里传入的是数组指针，返回的指针即数组首地址
	int* bubble_sort(int* data,int length)
	{
		// 在c++的函数里面，如果把一个数组作为参数传进去，那么这个数组就会退化为一个指针，
		//因而就不知道这个数组的长度（这里的数组指的是静态的而不是new出来的）.
		//int length = sizeof(data[0]); 有问题
		if (data == NULL||length ==0)
		{
			return NULL;
		}
		//
		//这个循环☞每走完一次，最后的下标向前移
		for (int j = 0;j<=length-1;j++)
		{
			//先写这一段，i是下标，
			//要交换，，第一次是i从0移动到下标length-2
			for(int i = 0;i<=length-2-j;i++)
			{
				//这里没有等号哈，不然是不稳定的
				if(data[i]>data[i+1])
				{
					int temp = data[i+1];
					data[i+1] = data[i];
					data[i] = temp;
				}
			}

		}			

		return data;
	}
	int* select_sort(int*data,int length)
	{
		if (data==NULL||length<=0)
		{
			return NULL;
		}
		
		//外循环的j范围 看内循环i=j+1可以的取值
		for(int j = 0;j<=length-2;j++)
		{
			//先假设最小的是0号位，比较则从1号开始
			//int min_index = 0;
			int min_index = j;
			//下标总是能到最后啊
			for(int i =j+1;i<=length-1;i++)
			{
				if (data[min_index]>data[i]){
					min_index = i;
				}	

			}
			int temp = data[j];
			data[j] = data[min_index];
			data[min_index] = temp;
		}
		return data;			
	}
	int* insert_sort(int*data,int length){
		if (data==NULL||length<=0)
		{
			return NULL;
		}

		//外层循环 因为下标i得从1到length-1
		for(int j = 1;j<=length-1;j++)
		{
			//内层循环
			//取下标i元素时，需要不断与前面有序元素比较,比前面小，则要前移
			int i=j;
			while(i<0)
			{
				if (data[i-1]<data[i])
				{
					//跳出循环，那就是到data[i]是有序的
					break;
				}
				//前面的要大的话则交换
				int temp = data[i-1];
				data[i-1]= data[i];
				data[i] = temp;
				i--;
			}

		}
	}
		int* shell_sort(int*data,int length){
			if (data==NULL||length<=0)
			{
				return NULL;
			}
			//插入排序步骤：
			int gap = length/2;
			while(gap>0){
				//外层循环 因为下标i得从1到length-1
			/*	for(int j = 1;j<=length-1;j++)*/
				for(int j = 1;j<=gap-1;j++)
				{
					//内层循环
					//取下标i元素时，需要不断与前面有序元素比较,比前面小，则要前移
					int i=j;
					while(i<0)
					{
						if (data[i-1]<data[i])
						{
							//跳出循环，那就是到data[i]是有序的
							break;
						}
						//前面的要大的话则交换
						int temp = data[i-1];
						data[i-1]= data[i];
						data[i] = temp;
						i--;
					}

				}


			}
			
		}

	
};
int main()
{
	//用数组长度都不能获取
	int a[11] ={-12,2,33,5,34,34,344,-67,89,123,-90};
	int length = 11;
	//int length = sizeof(a[0]);//
	solution mm ;
	mm.bubble_sort(a,length);
	for(int j = 0;j<=length-1;j++){
		cout<<a[j]<<" ";
	}
	cout<<""<<endl;
	int b[11] ={-12,56,33,233,34,34,344,-67,89,123,-90};
	mm.select_sort(b,length);
	for(int j = 0;j<=length-1;j++){
		cout<<b[j]<<" ";
	}
	cout<<""<<endl;

	int c[11] ={-12,9,78,233,34,34,344,-67,89,123,-90};
	mm.select_sort(c,length);
	for(int j = 0;j<=length-1;j++){
		cout<<c[j]<<" ";
	}
	cout<<""<<endl;
	system("pause");
	return 0;
}
