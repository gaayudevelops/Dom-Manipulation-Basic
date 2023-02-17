//GETELEMENTBYID

var HeaderTitle=document.getElementById('header-title');

 HeaderTitle.textContent='Item Display';
 HeaderTitle.innerText="Item Lister";
 HeaderTitle.style.color="white";
 HeaderTitle.style.fontFamily='segoe ui';


 var Border=document.getElementById('main-header');
 Border.style.borderBottom='solid 5px black';

//  //GETELEMENTBYCLASSNAME

var FormTitle=document.getElementsByClassName('from-title');

  FormTitle[0].style.fontWeight='bold';
  FormTitle[0].style.color='green';


var Items=document.getElementsByClassName('list-group-item');
 console.log(Items);
 Items[2].style.backgroundColor='lightgreen';


 for( var i=0;i<Items.length;i++)
  {
      Items[i].style.fontWeight='bold';
  }

// GETELEMENTSBYTAGNAME

   var li=document.getElementsByTagName('li');
   console.log(li);
   li[1].style.fontWeight='bold';

    for(var i=0;i<li.length;i++)
     {
         li[i].style.color='red'
     }

//QUERYSELECTOR

      //Using Classname for nth child
     var lastelem=document.querySelector('.list-group-item:nth-child(2)') 
     lastelem.style.backgroundColor=" lightgreen";

    var lastelem=document.querySelector('.list-group-item:nth-child(3)') 
    lastelem.style.display=" none"; 

 var itemlist=document.querySelector('#items');

// firstChild
console.log(itemlist.firstChild);

//FirstElement Child
console.log(itemlist.firstElementChild);

//lastChild
console.log(itemlist.lastChild);

//LastElement Child
console.log(itemlist.lastElementChild);

//nextSibling
console.log(itemlist.nextSibling);

//nextElementSibling
console.log(itemlist.nextElementSibling);

//previousSibling
console.log(itemlist.previousSibling);

//previousElementSibling
console.log(itemlist.previousElementSibling);

//Create Element
var newDiv=document.createElement('div');

//adding classname 
newDiv.className='hello';

//adding id
newDiv.id='hello 1';

//adding attribute
newDiv.setAttribute('title','Hello Div');

//creating text node
var newDivText=document.createTextNode('Hello');
console.log(newDiv);

//add text to Div
newDiv.appendChild(newDivText);


//to insert new element from script to html

    //to insert newDiv before item lister
var container=document.querySelector('header .container');

var h1= document.querySelector('header h1');

container.insertBefore(newDiv,h1);



  //to insert newli hello world before first item 

//Create Element
var newli=document.createElement('li');

//adding classname
newli.className='list-group-item';

//creating textnode
var newliText=document.createTextNode('HELLO');

//adding text to Div
newli.appendChild(newliText);

var item=document.querySelector('.list-group');

var li=item.children[0];

item.insertBefore(newli,li);
