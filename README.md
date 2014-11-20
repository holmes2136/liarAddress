liarAddress
===========



How liarAddress works
==========

Sample 1 : create simple address control : 

```javascript
<div id="sample"></div>

$("#sample").simpAddr();

>>> 
```
![alt text](https://dl.dropboxusercontent.com/u/23971112/github/liaraddress.jpg "Title")

[DEMO](http://jsbin.com/momawo/1/)


liarAddress  API
==========
```javascript
//取得郵遞區號
("#sample").simpAddr('postalVal');
>>> "100"

//設定郵遞區號
("#sample").simpAddr('postalVal','100');

//取得縣市
$("#sample").simpAddr('cityVal')
>>>"台北市"

//設定縣市
$("#sample").simpAddr('cityVal','台北市')

//取得地區名稱
$("#sample").simpAddr('townVal')
>>>"中正區"

//設定地區名稱
$("#sample").simpAddr('townVal','中正區')

//取得詳細地址
$("#sample").simpAddr('detailVal')
>>>"武松街xx巷"

//設定詳細地址
$("#sample").simpAddr('detailVal','武松街xx巷')

//取得地址陣列
$("#sample").simpAddr('getAddrArray')
>>>['100','台北市','中正區','武松街xx巷']

//回復預設狀態 , 選單會回到都沒有選取任何值的狀態
$('#sample').simpAddr('postalVal','')
$("#sample").simpAddr('townVal','')
$("#sample").simpAddr('cityVal','')

```

p.s 若需要針對特殊需求新增特殊編號 , 例如海外地等 , 請自行對 liar.zipMenu.js 添加資料

