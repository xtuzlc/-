// 归并排序.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"

//C++ 版本 递归实现
#include<iostream>
using namespace std;

/*********************函数参数说明**********************
传入参数：数组的首地址 int* number
          第一个已排序序列的起始索引 int start，第一个已排序序列的终止索引 int mid；
		  （第二个已排序序列的起始索引 mid + 1），第二个已排序序列的终止索引 int end；
********************************************************/

void Merge(int* numbers, int start, int mid, int end) {
	int* temp = new int[end - start + 1];	//第一步，申请空间，大小为两个排序序列之和
	int fistSectionIndex = start;			//第二步，设定两个待排序列的起始位置的索引
	int secondSectionIndex = mid + 1;
	int tempIndex = 0;	//所申请空间的索引

	while (fistSectionIndex <= mid && secondSectionIndex <= end) {	//直到两个序列中有一个到达终止位置
		if (numbers[fistSectionIndex] <= numbers[secondSectionIndex])
			temp[tempIndex++] = numbers[fistSectionIndex++];
		else
			temp[tempIndex++] = numbers[secondSectionIndex++];
	}

	while (fistSectionIndex <= mid)
		temp[tempIndex++] = numbers[fistSectionIndex++];

	while (secondSectionIndex <= end)
		temp[tempIndex++] = numbers[secondSectionIndex++];

	for (int j = 0; j < tempIndex; ++j)		//将合并且排序好的元素，复制到原来的数组中，释放临时数组空间
		numbers[start + j] = temp[j];

	delete[] temp;
}


void MergeSort(int* numbers, int start, int end) {
	if (numbers == NULL || start >= end)
		return;
	
	int mid = (start + end) / 2;
	
	MergeSort(numbers, start, mid);		//递归排序numbers[start,mid](首先从上往下递归分解到最底层元素个数为1的情况)
	//for (int i = 0; i <=10; i++)
	//	cout << numbers[i] << ' ';
	//cout << endl;
	MergeSort(numbers, mid + 1, end);	//递归排序numbers[mid + 1,end](首先从上往下递归分解到最底层元素个数为1的情况)
	//for (int i = 0; i <=10; i++)
	//	cout << numbers[i] << ' ';
	//cout << endl;
	//Merge(numbers, start, mid, end);	//然后递归的从下往上合并排序
	////for (int i = 0; i <=10; i++)
	////	cout << numbers[i] << ' ';
	//cout << endl;
	int* temp = new int[end - start + 1];	//第一步，申请空间，大小为两个排序序列之和
	int fistSectionIndex = start;			//第二步，设定两个待排序列的起始位置的索引
	int secondSectionIndex = mid + 1;
	int tempIndex = 0;	//所申请空间的索引

	while (fistSectionIndex <= mid && secondSectionIndex <= end) {	//直到两个序列中有一个到达终止位置
		if (numbers[fistSectionIndex] <= numbers[secondSectionIndex])
			temp[tempIndex++] = numbers[fistSectionIndex++];
		else
			temp[tempIndex++] = numbers[secondSectionIndex++];
	}

	while (fistSectionIndex <= mid)
		temp[tempIndex++] = numbers[fistSectionIndex++];

	while (secondSectionIndex <= end)
		temp[tempIndex++] = numbers[secondSectionIndex++];

	for (int j = 0; j < tempIndex; ++j)		//将合并且排序好的元素，复制到原来的数组中，释放临时数组空间
		numbers[start + j] = temp[j];

	delete[] temp;
}

int main() {
	int a[11] = { -90,69,11,-8,3,94,-8,11,3,11,9 };
	cout << "归并排序前：";
	for (int i = 0; i <=10; i++)
		cout << a[i] << ' ';
	cout << endl;

	MergeSort(a, 0, 10);

	cout << "归并排序后：";
	for (int i = 0; i <= 10; i++)
		cout << a[i] << ' ';
	cout << endl;
	system("pause");
	return 0;
}
