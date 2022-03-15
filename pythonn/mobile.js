function fillmobile()
{
removeOptions()
switch(mobiles.selectedIndex)
{
case 1:
   var sam=['Models','Samsung Galaxy A03','Samsung Galaxy M52 5G','Samsung Galaxy A12','Samsung Galaxy Z Fold']
   var price=[0,14000,16000,18000,21000]
   var des=['','','RAM \t: 4gb <br>Processor \t: Intel','RAM \t: 4gb <br>Processor \t: Intel','RAM \t: 4gb <br>Processor \t: Intel',]
   fillOptions(sam,price,des)
   break
case 2:
   var iphone=['Models','iphone13 Mini','iphone 12','iphone 13 Pro','iphone XR']
   var price=[0,14000,16000,18000,21000]
   var des=['','','RAM \t: 4gb <br>Processor \t: Intel','RAM \t: 4gb <br>Processor \t: Intel','RAM \t: 4gb <br>Processor \t: Intel',]
   fillOptions(iphone,price,des)
   break
case 3:
   var realme=['Models','realme 7i','realme 8i','realme 9i']
   var price=[0,14000,16000,18000]
   var des=['','RAM \t: 4gb <br>Processor \t: Intel','RAM \t: 4gb <br>Processor \t: Intel','RAM \t: 4gb <br>Processor \t: Intel',]
   fillOptions(realme,price,des)
   break
case 4:
   var mot=['Models','moto e','moto G','moto g4 plus']
   var price=[0,14000,16000,18000]
   var des=['','RAM \t: 4gb <br>Processor \t: Intel','RAM \t: 4gb <br>Processor \t: Intel','RAM \t: 4gb <br>Processor \t: Intel',]
   fillOptions(mot,price,des)
   break
case 5:
   var sony=['Models','sony xperia','sony xperia M5','sony xperia XA1']
   var price=[0,14000,16000,18000]
   var  des=['','RAM \t: 4gb <br>Processor \t: Intel','RAM \t: 4gb <br>Processor \t: Intel','RAM \t: 4gb <br>Processor \t: Intel',]
   fillOptions(sony,price,des)
   break

}
}


function fillOptions(mob,price,des)
{
   for(i=0;i<mob.length;i++)
   {

     opt=document.createElement("option")
     opt.text=mob[i]
     opt.value=price[i]+"#"+des[i]
     models.add(opt)
   }
}


function removeOptions()
{
   for(j=models.options.length-1;j>=0;j--)
   {
     models.remove(j)
   }
}

function showdes()
{
    var data=models.value.split("#")
   price.innerHTML=data[0]
   des.innerHTML=data[1]
   mimage.src=models.options[models.selectedIndex].text+".jfif"
}