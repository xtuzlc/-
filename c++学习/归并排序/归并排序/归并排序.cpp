// �鲢����.cpp : �������̨Ӧ�ó������ڵ㡣
//

#include "stdafx.h"

//C++ �汾 �ݹ�ʵ��
#include<iostream>
using namespace std;

/*********************��������˵��**********************
���������������׵�ַ int* number
          ��һ�����������е���ʼ���� int start����һ�����������е���ֹ���� int mid��
		  ���ڶ������������е���ʼ���� mid + 1�����ڶ������������е���ֹ���� int end��
********************************************************/

void Merge(int* numbers, int start, int mid, int end) {
	int* temp = new int[end - start + 1];	//��һ��������ռ䣬��СΪ������������֮��
	int fistSectionIndex = start;			//�ڶ������趨�����������е���ʼλ�õ�����
	int secondSectionIndex = mid + 1;
	int tempIndex = 0;	//������ռ������

	while (fistSectionIndex <= mid && secondSectionIndex <= end) {	//ֱ��������������һ��������ֹλ��
		if (numbers[fistSectionIndex] <= numbers[secondSectionIndex])
			temp[tempIndex++] = numbers[fistSectionIndex++];
		else
			temp[tempIndex++] = numbers[secondSectionIndex++];
	}

	while (fistSectionIndex <= mid)
		temp[tempIndex++] = numbers[fistSectionIndex++];

	while (secondSectionIndex <= end)
		temp[tempIndex++] = numbers[secondSectionIndex++];

	for (int j = 0; j < tempIndex; ++j)		//���ϲ�������õ�Ԫ�أ����Ƶ�ԭ���������У��ͷ���ʱ����ռ�
		numbers[start + j] = temp[j];

	delete[] temp;
}


void MergeSort(int* numbers, int start, int end) {
	if (numbers == NULL || start >= end)
		return;
	
	int mid = (start + end) / 2;
	
	MergeSort(numbers, start, mid);		//�ݹ�����numbers[start,mid](���ȴ������µݹ�ֽ⵽��ײ�Ԫ�ظ���Ϊ1�����)
	//for (int i = 0; i <=10; i++)
	//	cout << numbers[i] << ' ';
	//cout << endl;
	MergeSort(numbers, mid + 1, end);	//�ݹ�����numbers[mid + 1,end](���ȴ������µݹ�ֽ⵽��ײ�Ԫ�ظ���Ϊ1�����)
	//for (int i = 0; i <=10; i++)
	//	cout << numbers[i] << ' ';
	//cout << endl;
	//Merge(numbers, start, mid, end);	//Ȼ��ݹ�Ĵ������Ϻϲ�����
	////for (int i = 0; i <=10; i++)
	////	cout << numbers[i] << ' ';
	//cout << endl;
	int* temp = new int[end - start + 1];	//��һ��������ռ䣬��СΪ������������֮��
	int fistSectionIndex = start;			//�ڶ������趨�����������е���ʼλ�õ�����
	int secondSectionIndex = mid + 1;
	int tempIndex = 0;	//������ռ������

	while (fistSectionIndex <= mid && secondSectionIndex <= end) {	//ֱ��������������һ��������ֹλ��
		if (numbers[fistSectionIndex] <= numbers[secondSectionIndex])
			temp[tempIndex++] = numbers[fistSectionIndex++];
		else
			temp[tempIndex++] = numbers[secondSectionIndex++];
	}

	while (fistSectionIndex <= mid)
		temp[tempIndex++] = numbers[fistSectionIndex++];

	while (secondSectionIndex <= end)
		temp[tempIndex++] = numbers[secondSectionIndex++];

	for (int j = 0; j < tempIndex; ++j)		//���ϲ�������õ�Ԫ�أ����Ƶ�ԭ���������У��ͷ���ʱ����ռ�
		numbers[start + j] = temp[j];

	delete[] temp;
}

int main() {
	int a[11] = { -90,69,11,-8,3,94,-8,11,3,11,9 };
	cout << "�鲢����ǰ��";
	for (int i = 0; i <=10; i++)
		cout << a[i] << ' ';
	cout << endl;

	MergeSort(a, 0, 10);

	cout << "�鲢�����";
	for (int i = 0; i <= 10; i++)
		cout << a[i] << ' ';
	cout << endl;
	system("pause");
	return 0;
}
