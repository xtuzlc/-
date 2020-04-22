// 递归.cpp : 定义控制台应用程序的入口点。
//

/*递归例子*/
#include "stdafx.h"
#include<stdio.h>
#include <iostream>
using namespace std;
void up_and_down(int);
void MergeSort(int* numbers, int start, int end);
int main(void)
{
	/*up_and_down(1);*/
	int a [5] = {1,2,3,4,5};
	MergeSort(a, 0, 4);
	system("pause");
	return 0;
}
void up_and_down(int n)
{
	cout<<"Level:" <<n<<"location:"<<&n<<endl;
	 /* 1 */
	if(n<4)
	{
		up_and_down(n+1);
	}
	
	cout<<"Level:" <<n<<"location:"<<&n<<endl; /* 2 */
}
void MergeSort(int* numbers, int start, int end) {
	if (numbers == NULL || start >= end)
		return;
	int mid = (start + end) / 2;
	MergeSort(numbers, start, mid);	

	MergeSort(numbers, mid + 1, end);

	cout<<start<<","<<mid<<","<<end<<endl;
}