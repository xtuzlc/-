// ˳���.cpp : �������̨Ӧ�ó������ڵ㡣
//
//˳���
#include "stdafx.h"
#include <iostream>
using namespace std;
//��������ռ�
#define MAXSIZE 7
class list{
public:
	//˳���ĳ���
	int length;
	//˳���Ļ���ַ
	int *a;
	list(){
		length = 0;
		//����ַָ��һ���¿��ٵ�����
		a = new int[MAXSIZE];
	};
	~list(){
		delete[] a;
	};
	//nΪ�ڵ��� ��cin
	void creat_list(int n);
	//�ж��Ƿ�Ϊ��
	bool is_empty();
	//����˳���
	void travel();
	//������� n�������±�
	void insert(int n,int data);
	//ɾ������n�������±�
	void delate(int n);
};
void list::creat_list(int n)
{
	if (n<0||n>MAXSIZE)
	{
		cout << "����ڵ��������" << endl;
		return;
	}
	//ѭ���������в���Ԫ��
	for (int i = 0;i<=n-1;i++)
	{
		cout<<"�������"<<i+1<<"��Ԫ��:";
		cin>>this->a[i];
		cout<<"";
	}
	length = n;
}
bool list::is_empty(){
	return length==0;
}
void list::travel(){
	for(int i =0;i<=this->length-1;i++){
		cout<<this->a[i]<<" ";
	}
	cout<<""<<endl;
}
void list::insert(int n,int data)
{
	//���ܲ�������	
	if (length+1>MAXSIZE)
	{
		cout<<"��ǰ�������޷�����"<<endl;
		return;
	}	
	if (n<0)	
		n=0;
	if (n>length-1)	
		n= length;
	for(int i=length-1;i>=n;i--){		
		a[i+1] = a[i];//��ߵ�����ŲŲ
	}
	a[n]= data;
	length++;
}
void list::delate(int n)
{
	if (n<0)	
		n=0;
	if (n>length-1)	
		n= length-1;
	//ǰ��
	for (int i = n;i<=length-2;i++)
	{
		a[i]=a[i+1];
	}
	length--;
}
int main()
{
	list* li= new list();
	li->creat_list(6);
	cout<<li->is_empty()<<endl;
	li->travel();
	li->insert(4,45);
	li->travel();
	li->delate(2);
	li->travel();
	
	system("pause");
	return 0;
}
