#pragma execution_character_set("utf-8")
#include "pch.h"
#include <iostream>
#include <string>
#include <vector>
using namespace std;
class HouseItem;
class House;
class HouseItem {
public:
	HouseItem(string a, double b) {
		item_name = a;
		area = b;
	};
	~HouseItem() {
		cout << "这个家具拜拜了" << endl;
	};
	void show_information() {
		cout << "家具名：" << item_name << " 占地面积：" << area << endl;
	};
public:
	double area;
	string item_name;
};
class House {
public:
	House(string a, double b) {
		house_type = a;
		area = b;
		item_list.clear();
		free_area = area;
	};
	~House() {
		cout << "hahah";//没用
	};
	void show_information() {
		string a = "";
		int j = 0;
		int ss = item_list.size();
		while (j < item_list.size()) {
			a += item_list[j];
			a += " ";
			j++;
		}
		cout << "户型:" << house_type << " 总面积：" << area <<
			" 当前家具列表：" << a << endl;
	};
	void additem(HouseItem*p) {
		if (free_area < p->area) {
			cout << p->item_name << "无法放下，当前剩余面积：" << free_area << endl;
			return;
		}
		free_area = free_area - p->area;
		item_list.push_back(p->item_name);
		cout << "添加新家具：" << p->item_name << " 占地面积：" << p->area << endl;
	};
public:
	double area;//总区域
	string house_type;//房子类型
	vector<string> item_list;//家具列表
	double free_area;//剩余区域
};
int main() {
	HouseItem* bed = new HouseItem("席梦思", 50);
	HouseItem* table = new HouseItem("桌子", 15);
	HouseItem* bathroom = new HouseItem("浴室", 40);
	House* myhouse = new House("zlc豪宅", 100);
	myhouse->additem(bed);
	myhouse->additem(table);
	myhouse->additem(bathroom);
	myhouse->show_information();
	return 0;
}