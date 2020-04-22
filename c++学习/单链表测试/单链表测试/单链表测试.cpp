// ���������.cpp : �������̨Ӧ�ó������ڵ㡣
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
	//�ж��Ƿ�Ϊ��
	bool is_Linkempty();
	//β������
	void append(int);
	//��������
	void travel();
	//������
	int get_length();
	//��ͷ���
	void add(int);
	//��ĳһλ�ò���
	void insert(int pos,int item);
   //����Ԫ��λ��
	int search(int item);
	//ɾ�����һ��
	void delete_last();
	//ɾ����һ��
	void delete_first();
	//ɾ��ĳһλ��
	void deleta_pos(int pos);
	//ɾ��Ԫ��
	void remove(int item);
	//ɾ������
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
	//���״�
	//temp = head->next;
	//while(temp!=NULL){
	//	temp = temp->next;
	//}
	//temp->next= n;
	temp = head;
	while(temp->next!=NULL){
		temp =temp->next;
	}
	//ֻ���������ܸı�����ڵ��ָ�����ֵ��
	temp->next = n;
}
int SingleLink::get_length(){
	int size = 0;
	//�����õ��α�
	Node*cur = head;
	while(cur->next!=NULL){
		size++;
		cur=cur->next;
	}
	return size;

}
void SingleLink::travel(){
	//�α�
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
  //pos��0��length-1
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
	//���������е�һ�����ָ����ֵ��±�
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
	cout<<"û�и�����"<<endl;
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
	//ѭ������3���ڵ�����ǰ�Ľڵ�
	Node*cur1 = cur->next;	
	cur->next = cur1->next;
}
void SingleLink::remove(int item){
	//ɾ����һ�γ��ֵ�Ԫ��
	if (search(item)==-1)
	{
		return;
	}
	deleta_pos(search(item));
}
//�ͷ�����
void SingleLink::delat_list()
{
	Node* p = head;
	Node* s;
	if (this->head==NULL)
	{
		cout<<"������Ϊ������"<<endl;

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
	cout<<"��������ɾ���ɹ�!"<<endl;
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
	//�����ͷ���
	L->delat_list();
	/*cout<< L->is_Linkempty()<<endl;*/
	system("pause");
	return 0;
}

