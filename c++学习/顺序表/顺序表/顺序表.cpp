// 顺序表.cpp : 定义控制台应用程序的入口点。
//
//顺序表
#include "stdafx.h"
#include <iostream>
using namespace std;
//数组的最大空间
#define MAXSIZE 7
class list{
public:
	//顺序表的长度
	int length;
	//顺序表的基地址
	int *a;
	list(){
		length = 0;
		//基地址指向一个新开辟的数组
		a = new int[MAXSIZE];
	};
	~list(){
		delete[] a;
	};
	//n为节点数 用cin
	void creat_list(int n);
	//判断是否为空
	bool is_empty();
	//遍历顺序表
	void travel();
	//插入操作 n是数组下标
	void insert(int n,int data);
	//删除操作n是数组下标
	void delate(int n);
};
void list::creat_list(int n)
{
	if (n<0||n>MAXSIZE)
	{
		cout << "输入节点个数有误！" << endl;
		return;
	}
	//循环向数组中插入元素
	for (int i = 0;i<=n-1;i++)
	{
		cout<<"请输入第"<<i+1<<"个元素:";
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
	//不能插入的情况	
	if (length+1>MAXSIZE)
	{
		cout<<"当前已满，无法插入"<<endl;
		return;
	}	
	if (n<0)	
		n=0;
	if (n>length-1)	
		n= length;
	for(int i=length-1;i>=n;i--){		
		a[i+1] = a[i];//后边的往后挪挪
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
	//前移
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
