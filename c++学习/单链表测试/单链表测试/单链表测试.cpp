// 单链表测试.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include <iostream>
using namespace std;
class Node{
public:
	Node();
	~Node();
public:
	int item;
	Node* next;
};
Node::Node()
{

}
Node::~Node()
{

}
class SingleLink{
public:
	SingleLink();
	~SingleLink();
	Node* head;
	//判断是否为空
	bool is_Linkempty();
	//尾部插入
	void append(int);
	//遍历链表
	void travel();
	//链表长度
	int get_length();
	//从头添加
	void add(int);
	//在某一位置插入
	void insert(int pos,int item);
   //搜索元素位置
	int search(int item);
	//删除最后一个
	void delete_last();
	//删除第一个
	void delete_first();
	//删除某一位置
	void deleta_pos(int pos);
	//删除元素
	void remove(int item);
	//删除链表
	void delat_list();
};
SingleLink::SingleLink(){
	head = new Node();
	head->item = 0;
	head->next = NULL;
}
SingleLink::~SingleLink(){

}
bool SingleLink::is_Linkempty(){
	return head->next == NULL;
}
void SingleLink::append(int item){
	Node* n = new Node();
	Node* temp;
	n->item = item;
	n->next = NULL;
	if (head->next == NULL)
	{
		head->next = n;
		n->next = NULL;
		return;
	}
	//容易错啊
	//temp = head->next;
	//while(temp!=NULL){
	//	temp = temp->next;
	//}
	//temp->next= n;
	temp = head;
	while(temp->next!=NULL){
		temp =temp->next;
	}
	//只有这样才能改变这个节点的指针域的值啊
	temp->next = n;
}
int SingleLink::get_length(){
	int size = 0;
	//数数用的游标
	Node*cur = head;
	while(cur->next!=NULL){
		size++;
		cur=cur->next;
	}
	return size;

}
void SingleLink::travel(){
	//游标
	Node*cur = head->next;
	while(cur!=NULL){
		cout<<cur->item<<"->";
		cur = cur->next;
	}
	cout<<"Null"<<endl;
}
void SingleLink::add(int item){
	Node* n = new Node;
	n->item = item;
	n->next = head->next;
	head->next = n;
}
void SingleLink::insert(int pos,int item){
  //pos是0到length-1
	if (pos<=0)
	{
		add(item);
		return;
	}
	if (pos>=(this->get_length()))
	{
		append(item);
		return;
	}
	Node* cur1 = head;
	Node* cur2 = head;
	for (int j =0;j<=pos-1;j++)
	{
		cur1 = cur1->next;
		cur2 = cur2->next;
	}
	cur2 = cur2->next;
	Node* n = new Node();
	n->item = item;
	n->next = cur2;
	cur1->next = n;
}
int SingleLink::search(int item){
	//搜索链表中第一个出现该数字的下标
	int pos = 0;
	Node* cur = head;
	while(cur->next!=NULL){
		cur = cur->next;		
		if(cur->item ==item)
		{
			return pos;			
		}
		pos++;
	}
	cout<<"没有该数据"<<endl;
	return -1;	
}
void SingleLink::delete_last(){
	if (get_length()<=0)
	{
		return;
	}
	if (get_length()==1)
	{
		head->next = NULL;
		return;
	}
	/*if(get_length()-2>=0)*/
	Node* cur1 = head;
	for(int i = 0;i<=get_length()-2;i++){
		cur1 = cur1->next;
	}
	//Node* cur2 = cur1->next;
	//free(cur2);
	cur1->next = NULL;
	
}
void SingleLink::delete_first(){
	if (get_length()<=0)
	{
		return;
	}
	if (get_length()==1)
	{
		head->next = NULL;
		return;
	}
	Node* cur1 = head->next;	
	head->next = cur1->next;
}
void SingleLink::deleta_pos(int pos){
	if (pos>=get_length()-1)
	{
		delete_last();
		return;
	}
	if (pos<=0)
	{
		delete_first();
		return;
	}
	Node* cur = head;
	for(int j=0;j<pos;j++)
	{
		cur = cur->next;
	}
	//循环后是3个节点中最前的节点
	Node*cur1 = cur->next;	
	cur->next = cur1->next;
}
void SingleLink::remove(int item){
	//删除第一次出现的元素
	if (search(item)==-1)
	{
		return;
	}
	deleta_pos(search(item));
}
//释放链表
void SingleLink::delat_list()
{
	Node* p = head;
	Node* s;
	if (this->head==NULL)
	{
		cout<<"链表本身为空链表"<<endl;

	}
	else{
		while(p->next!=NULL)
		{
			s = p;
			p = p->next;
			delete s;		
		}
		delete p;
		head = NULL;
	}
	cout<<"整个链表删除成功!"<<endl;
}
int main()
{
	cout<<"hello world"<<endl;
	SingleLink* L = new SingleLink();
	L->add(2);
	L->append(1);
	L->append(2);
	L->append(5);
	L->travel();
	cout<< L->get_length()<<endl;
	L->add(70);
	L->travel();
	L->insert(1,100);
	L->travel();
	cout<< L->search(70)<<endl;
	cout<< L->get_length()<<endl;
	
	L->remove(12);
	L->remove(2);
	L->travel();
	//链表释放了
	L->delat_list();
	/*cout<< L->is_Linkempty()<<endl;*/
	system("pause");
	return 0;
}

